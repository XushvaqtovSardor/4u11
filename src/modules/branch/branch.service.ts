import { Injectable } from '@nestjs/common';

@Injectable()
export class BranchService {
    constructor(private prisma:PrismaS)
}
