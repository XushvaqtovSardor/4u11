import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Course } from 'prisma/generated';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({ dto });
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
    if (!course) throw new NotFoundException(`Course not exits`);
    return course;
  }

  async update(id: number, dto: UpdateCourseDto): Promise<Course> {
    const course = await this.prisma.course.findFirst({
      where: { id },
    });
    if (!course) throw new NotFoundException(`Course ${id} not found`);
    return this.prisma.course.update({
      where: { id },
      dto,
    });
  }

  async remove(id: number) {
    const exist = await this.prisma.course.findUnique({ where: { id } });
    if (!exist) {
      throw new NotFoundException(`course with ${id} not found`);
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
