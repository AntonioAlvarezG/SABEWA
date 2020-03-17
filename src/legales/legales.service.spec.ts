import { Test, TestingModule } from '@nestjs/testing';
import { LegalesService } from './legales.service';

describe('LegalesService', () => {
  let service: LegalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegalesService],
    }).compile();

    service = module.get<LegalesService>(LegalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
