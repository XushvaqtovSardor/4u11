import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room, Status } from 'prisma/generated';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  create(data: {
    name: string;
    capacity: number;
    branchId: number;
    status?: Status;
  }): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  findAll(): Promise<Room[]> {
    return this.prisma.room.findMany({
      where: { deletedAt: null },
      include: { branch: true, groups: true },
    });
  }
  findOne(id: number): Promise<Room | null> {
    return this.prisma.room.findUnique({
      where: { id },
      include: { branch: true, groups: true },
    });
  }
  update(
    id: number,
    data: {
      name?: string;
      capacity?: number;
      branchId?: number;
      status?: Status;
    },
  ): Promise<Room> {
    return this.prisma.room.update({
      where: { id },
      data,
    });
  }

  remove(id: number): Promise<Room> {
    return this.prisma.room.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
  delete(id: number): Promise<Room> {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}
