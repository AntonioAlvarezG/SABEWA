import { Module } from '@nestjs/common';
import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';
import { DatesModule } from '../dates/dates.module';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [AwardsController],
  providers: [AwardsService]
})
export class AwardsModule {}
