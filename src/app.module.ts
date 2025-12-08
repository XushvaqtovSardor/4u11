import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './modules/branch/branch.module';
import { RoomModule } from './modules/room/room.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BranchModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
