import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Status } from '@prisma/client';

export class CreateGroupDto {
  @IsString()
  name: string;

  @IsNumber()
  branchId: number;

  @IsNumber()
  roomId: number;

  @IsNumber()
  courseId: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  startLesson: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
