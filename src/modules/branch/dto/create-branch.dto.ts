import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateBranchDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
