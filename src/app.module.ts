import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchService } from './modules/branch/branch.service';
import { BranchController } from './modules/branch/branch.controller';
import { BranchModule } from './modules/branch/branch.module';
import { Module } from './prisma/.module';
import { PrismaModule } from './prisma/prisma/prisma.module';

@Module({
  imports: [BranchModule, Module, PrismaModule],
  controllers: [AppController, BranchController],
  providers: [AppService, BranchService],
})
export class AppModule {}
