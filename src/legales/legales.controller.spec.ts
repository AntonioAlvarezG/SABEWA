import { Test, TestingModule } from '@nestjs/testing';
import { LegalesController } from './legales.controller';

describe('Legales Controller', () => {
  let controller: LegalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegalesController],
    }).compile();

    controller = module.get<LegalesController>(LegalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
