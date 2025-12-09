import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './modules/branch/branch.module';
import { RoomModule } from './modules/room/room.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { GroupModule } from './modules/group/group.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { StaffModule } from './modules/staff/staff.module';
import { EmailModule } from './common/email/email.module';

@Module({
  imports: [
    PrismaModule,
    EmailModule,
    BranchModule,
    RoomModule,
    CourseModule,
    GroupModule,
    TeacherModule,
    StudentModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
