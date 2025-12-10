import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermission = this.reflector.get<{
      table: string;
      action: string;
    }>('permission', context.getHandler());

    if (!requiredPermission) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if (user.role === 'staff' && user.staffRole === 'SuperAdmin') {
      return true;
    }

    if (user.role === 'staff' && user.staffRole === 'Admin') {
      const permissions = await this.prisma.permission.findFirst({
        where: {
          staffId: user.userId,
          tableName: requiredPermission.table,
        },
      });

      if (!permissions) {
        throw new ForbiddenException('No permissions for this resource');
      }

      const actionMap = {
        read: permissions.canRead,
        write: permissions.canWrite,
        update: permissions.canUpdate,
        delete: permissions.canDelete,
      };

      if (!actionMap[requiredPermission.action]) {
        throw new ForbiddenException(
          `Insufficient permissions for ${requiredPermission.action}`,
        );
      }

      return true;
    }

    return false;
  }
}
