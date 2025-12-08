import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  private generateOTP(length = 6): number {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // 0-9 raqam
    }
    return Number(otp);
  }
  async sendEmail(email: string, code: number) {
    const otp =this.generateOTP
     await this.mailerService.sendMail({
      to: email,
      subject: 'Your Verification Code',
      template: 'index',
      context: { code },
    });
  }
}
