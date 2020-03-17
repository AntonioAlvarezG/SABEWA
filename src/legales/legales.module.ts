import { Module } from '@nestjs/common';
import { LegalesController } from './legales.controller';
import { LegalesService } from './legales.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [LegalesController],
  providers: [LegalesService]
})
export class LegalesModule {}
