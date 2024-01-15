import { Test, TestingModule } from '@nestjs/testing';
import { QueuereceiverService } from './queuereceiver.service';

describe('QueuereceiverService', () => {
  let service: QueuereceiverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueuereceiverService],
    }).compile();

    service = module.get<QueuereceiverService>(QueuereceiverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
