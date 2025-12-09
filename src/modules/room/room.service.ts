import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Room } from '@prisma/client';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoomDto): Promise<Room> {
    return this.prisma.room.create({ data: dto });
  }

  async findAll(): Promise<Room[]> {
    return this.prisma.room.findMany({
      where: { deletedAt: null },
      include: { branch: true, groups: true },
    });
  }

  async findOne(id: number): Promise<Room> {
    const room = await this.prisma.room.findUnique({
      where: { id },
      include: { branch: true, groups: true },
    });
    if (!room || room.deletedAt) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return room;
  }

  async update(id: number, dto: UpdateRoomDto): Promise<Room> {
    await this.findOne(id);
    return this.prisma.room.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<Room> {
    await this.findOne(id);
    return this.prisma.room.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
