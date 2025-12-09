import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Status } from '@prisma/client';

export class CreateStudentDto {
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  branchId: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
