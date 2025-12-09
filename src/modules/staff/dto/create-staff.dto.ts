import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Status, StaffRole } from '@prisma/client';

export class CreateStaffDto {
  @IsString()
  fullName: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsEnum(StaffRole)
  role: StaffRole;

  @IsOptional()
  @IsNumber()
  branchId?: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
