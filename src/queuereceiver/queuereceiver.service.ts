import { ServiceBusReceiver } from '@azure/service-bus';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Receiver } from 'nestjs-azure-service-bus';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class QueueReceiverService implements OnModuleInit {
  constructor(
    @Receiver('service-mail') private readonly receiver: ServiceBusReceiver,
    private readonly emailService: EmailService,
  ) {}
  onModuleInit() {
    this.receiver.subscribe({
      processMessage: async (message) => {
        
        const send = await this.emailService.sendMail(message.body);
        
      },
      processError: async (args) => {
        console.log(
          `Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `,
          args.error,
        );
      },
    });
  }
}
