import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Status } from 'prisma/generated';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  durationMonth: number;

  @IsNumber()
  durationHours: number;

  @IsString()
  level: string;

  @IsNumber()
  branchId: number;

  @IsOptional()
  status?: Status;
}
