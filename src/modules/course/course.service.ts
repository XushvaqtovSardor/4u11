import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Course } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({ data: dto });
  }

  async findAll(): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: { deletedAt: null },
      include: { branch: true, groups: true },
    });
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: { branch: true, groups: true },
    });
    if (!course || course.deletedAt)
      throw new NotFoundException(`Course not found`);
    return course;
  }

  async update(id: number, dto: UpdateCourseDto): Promise<Course> {
    const course = await this.prisma.course.findFirst({
      where: { id, deletedAt: null },
    });
    if (!course) throw new NotFoundException(`Course ${id} not found`);
    return this.prisma.course.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course || course.deletedAt) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return this.prisma.course.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
  async deleteHard(id: number) {
    await this.findOne(id);
    return this.prisma.course.delete({ where: { id } });
  }
}
