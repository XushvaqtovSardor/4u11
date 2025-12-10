import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Status } from '@prisma/client';

export class CreateTeacherDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  branchId: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
