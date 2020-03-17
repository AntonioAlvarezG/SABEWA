import { Module } from '@nestjs/common';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [DatesController],
  providers: [DatesService]
})
export class DatesModule {}
