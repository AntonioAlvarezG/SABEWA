import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
