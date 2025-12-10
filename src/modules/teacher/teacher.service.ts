import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Teacher } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTeacherDto): Promise<Teacher> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return this.prisma.teacher.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        password: hashedPassword,
        branchId: dto.branchId,
        status: dto.status,
      },
    });
  }

  async findAll(): Promise<Teacher[]> {
    return this.prisma.teacher.findMany({
      where: { deletedAt: null },
      include: {
        branch: true,
        teacherGroups: {
          include: { group: true },
        },
      },
    });
  }

  async findOne(id: number): Promise<Teacher> {
    const teacher = await this.prisma.teacher.findUnique({
      where: { id },
      include: {
        branch: true,
        teacherGroups: {
          include: { group: true },
        },
      },
    });
    if (!teacher || teacher.deletedAt) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }
    return teacher;
  }

  async update(id: number, dto: UpdateTeacherDto): Promise<Teacher> {
    await this.findOne(id);
    const data: any = { ...dto };
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
    return this.prisma.teacher.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Teacher> {
    await this.findOne(id);
    return this.prisma.teacher.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
