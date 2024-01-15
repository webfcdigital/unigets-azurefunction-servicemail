import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}

  async sendMail(message: any): Promise<any> {

    const response = await this.mailService.sendMail({
      to: message.metadados.to,
      from: 'portalunigets@unigets.com.br',
      subject: 'Novo código de acesso ao portal Unigets',
      template: 'codigoAuth',
      context:{ 
        dados: message.metadados
      }
    });
    console.log(response);
    return response;
  }
}
