import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateRoomDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  capacity: number;

  @IsNumber()
  branchId: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
