import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Staff } from '@prisma/client';

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStaffDto): Promise<Staff> {
    return this.prisma.staff.create({
      data: dto,
    });
  }

  async findAll(): Promise<Staff[]> {
    return this.prisma.staff.findMany({
      where: { deletedAt: null },
      include: {
        branch: true,
        permissions: true,
      },
    });
  }

  async findOne(id: number): Promise<Staff> {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
      include: {
        branch: true,
        permissions: true,
      },
    });
    if (!staff || staff.deletedAt) {
      throw new NotFoundException(`Staff with id ${id} not found`);
    }
    return staff;
  }

  async update(id: number, dto: UpdateStaffDto): Promise<Staff> {
    await this.findOne(id);
    return this.prisma.staff.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<Staff> {
    await this.findOne(id);
    return this.prisma.staff.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
