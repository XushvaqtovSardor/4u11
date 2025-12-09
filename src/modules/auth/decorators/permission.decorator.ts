import { SetMetadata } from '@nestjs/common';

export const Permission = (
  table: string,
  action: 'read' | 'write' | 'update' | 'delete',
) => SetMetadata('permission', { table, action });
