import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Status, CourseLevel } from '@prisma/client';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(1)
  durationMonth: number;

  @IsNumber()
  @Min(1)
  durationHours: number;

  @IsEnum(CourseLevel)
  level: CourseLevel;

  @IsNumber()
  branchId: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
