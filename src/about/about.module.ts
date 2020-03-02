import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {}
