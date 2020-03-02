import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
