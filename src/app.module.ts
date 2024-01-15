import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureServiceBusModule } from 'nestjs-azure-service-bus';
import { QueueModule } from './queue/queue.module';
import { QueueReceiverService } from './queuereceiver/queuereceiver.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email/email.service';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    AzureServiceBusModule.forRoot({
      connectionString:
        'Endpoint=sb://webfc-servicebus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=M0Ly+eiqmDADqnabd3Nlc8qiVBH+RCzjz+ASbOCUmIs=',
    }),
    QueueModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.skymail.net.br',
        auth: {
          user: 'portalunigets@unigets.com.br',
          pass: 'web@2022',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, QueueReceiverService, EmailService],
})
export class AppModule {}
