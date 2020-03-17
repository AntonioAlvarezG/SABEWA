import { Test, TestingModule } from '@nestjs/testing';
import { AwardsController } from './awards.controller';

describe('Awards Controller', () => {
  let controller: AwardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwardsController],
    }).compile();

    controller = module.get<AwardsController>(AwardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
