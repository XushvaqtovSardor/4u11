import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('verify-otp/teacher')
  async verifyTeacherOtp(@Body() dto: VerifyOtpDto) {
    return this.authService.verifyOtp(dto, 'teacher');
  }

  @Post('verify-otp/student')
  async verifyStudentOtp(@Body() dto: VerifyOtpDto) {
    return this.authService.verifyOtp(dto, 'student');
  }

  @UseGuards(JwtAuthGuard)
  @Put('change-password')
  async changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(req.user.userId, dto, req.user.role);
  }
}
