import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { MailService } from '../../common/email/mailer.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async login(dto: LoginDto) {
    let user;
    const { identifier, password, role = 'staff' } = dto;

    if (role === 'staff') {
      user = await this.prisma.staff.findUnique({
        where: { username: identifier },
        include: { permissions: true },
      });
    } else if (role === 'teacher') {
      user = await this.prisma.teacher.findUnique({
        where: { email: identifier },
      });
      if (user && !user.isVerified) {
        throw new UnauthorizedException('Email not verified');
      }
    } else if (role === 'student') {
      user = await this.prisma.student.findUnique({
        where: { email: identifier },
      });
      if (user && !user.isVerified) {
        throw new UnauthorizedException('Email not verified');
      }
    }

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      role,
      ...(role === 'staff' && { staffRole: user.role }),
      ...(role === 'teacher' && { branchId: user.branchId }),
      ...(role === 'student' && { branchId: user.branchId }),
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        fullName: user.fullName,
        role,
        ...(role === 'staff' && {
          staffRole: user.role,
          permissions: user.permissions,
        }),
      },
    };
  }

  async sendOtp(email: string, role: 'teacher' | 'student') {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    if (role === 'teacher') {
      await this.prisma.teacher.update({
        where: { email },
        data: { otp, otpExpiry },
      });
    } else {
      await this.prisma.student.update({
        where: { email },
        data: { otp, otpExpiry },
      });
    }

    await this.mailService.sendEmail(email, parseInt(otp));
    return { message: 'OTP sent to email' };
  }

  async verifyOtp(dto: VerifyOtpDto, role: 'teacher' | 'student') {
    let user;

    if (role === 'teacher') {
      user = await this.prisma.teacher.findUnique({
        where: { email: dto.email },
      });
    } else {
      user = await this.prisma.student.findUnique({
        where: { email: dto.email },
      });
    }

    if (!user || !user.otp || !user.otpExpiry) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (new Date() > user.otpExpiry) {
      throw new UnauthorizedException('OTP expired');
    }

    if (user.otp !== dto.otp) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (role === 'teacher') {
      await this.prisma.teacher.update({
        where: { id: user.id },
        data: { isVerified: true, otp: null, otpExpiry: null },
      });
    } else {
      await this.prisma.student.update({
        where: { id: user.id },
        data: { isVerified: true, otp: null, otpExpiry: null },
      });
    }

    return { message: 'Email verified successfully' };
  }

  async changePassword(userId: number, dto: ChangePasswordDto, role: string) {
    let user;

    if (role === 'staff') {
      user = await this.prisma.staff.findUnique({ where: { id: userId } });
    } else if (role === 'teacher') {
      user = await this.prisma.teacher.findUnique({ where: { id: userId } });
    } else if (role === 'student') {
      user = await this.prisma.student.findUnique({ where: { id: userId } });
    }

    if (!user || !user.password) {
      throw new UnauthorizedException('User not found');
    }

    const isOldPasswordValid = await bcrypt.compare(
      dto.oldPassword,
      user.password,
    );
    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Invalid old password');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    if (role === 'staff') {
      await this.prisma.staff.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
    } else if (role === 'teacher') {
      await this.prisma.teacher.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
    } else if (role === 'student') {
      await this.prisma.student.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
    }

    return { message: 'Password changed successfully' };
  }
}
