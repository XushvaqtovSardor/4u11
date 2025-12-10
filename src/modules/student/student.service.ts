import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Student } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudentDto): Promise<Student> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return this.prisma.student.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });
  }

  async findAll(): Promise<Student[]> {
    return this.prisma.student.findMany({
      where: { deletedAt: null },
      include: {
        branch: true,
        groups: {
          include: { group: true },
        },
      },
    });
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        branch: true,
        groups: {
          include: { group: true },
        },
      },
    });
    if (!student || student.deletedAt) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  async update(id: number, dto: UpdateStudentDto): Promise<Student> {
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<Student> {
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
