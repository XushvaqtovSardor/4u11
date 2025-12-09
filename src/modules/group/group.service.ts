import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Group } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGroupDto): Promise<Group> {
    return this.prisma.group.create({
      data: {
        name: dto.name,
        branchId: dto.branchId,
        roomId: dto.roomId,
        courseId: dto.courseId,
        startDate: new Date(dto.startDate),
        startLesson: new Date(dto.startLesson),
        endDate: new Date(dto.endDate),
        status: dto.status,
      },
    });
  }

  async findAll(): Promise<Group[]> {
    return this.prisma.group.findMany({
      where: { deletedAt: null },
      include: {
        branch: true,
        room: true,
        course: true,
        teachers: true,
        students: true,
      },
    });
  }

  async findOne(id: number): Promise<Group> {
    const group = await this.prisma.group.findUnique({
      where: { id },
      include: {
        branch: true,
        room: true,
        course: true,
        teachers: { include: { teacher: true } },
        students: { include: { student: true } },
      },
    });
    if (!group || group.deletedAt) {
      throw new NotFoundException(`Group with id ${id} not found`);
    }
    return group;
  }

  async update(id: number, dto: UpdateGroupDto): Promise<Group> {
    await this.findOne(id);
    return this.prisma.group.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.branchId && { branchId: dto.branchId }),
        ...(dto.roomId && { roomId: dto.roomId }),
        ...(dto.courseId && { courseId: dto.courseId }),
        ...(dto.startDate && { startDate: new Date(dto.startDate) }),
        ...(dto.startLesson && { startLesson: new Date(dto.startLesson) }),
        ...(dto.endDate && { endDate: new Date(dto.endDate) }),
        ...(dto.status && { status: dto.status }),
      },
    });
  }

  async remove(id: number): Promise<Group> {
    await this.findOne(id);
    return this.prisma.group.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
