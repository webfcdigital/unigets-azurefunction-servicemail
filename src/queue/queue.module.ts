import { Module } from '@nestjs/common';
import { AzureServiceBusModule } from 'nestjs-azure-service-bus';

@Module({
  imports: [
    AzureServiceBusModule.forFeature({
      receivers: ['service-mail'],
    }),
  ],
})
export class QueueModule {}
