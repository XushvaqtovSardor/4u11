import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['staff', 'teacher', 'student'])
  @IsOptional()
  role?: string;
}
