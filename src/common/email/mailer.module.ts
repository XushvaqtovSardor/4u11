// src/mail/mailer.module.ts
import { Global, Module } from '@nestjs/common';
import { MailerModule as NestModelMailer } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailService } from './mailer.service';

@Global()
@Module({
  imports: [
    NestModelMailer.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'xushvaqtovsardor032@gmail.com',
          pass: 'edml qmrx ewop nsoz',
        },
      },
      defaults: {
        from: '"N25" <xushvaqtovsardor032@gmail.com>',
      },
      template: {
        dir: join(__dirname, '..', 'template'),
        adapter: new HandlebarsAdapter(),
        options: { strict: true },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailerModule {}
