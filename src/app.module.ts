import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './data-base/data-base.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { GalleryModule } from './gallery/gallery.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [DataBaseModule, HomeModule, AboutModule, GalleryModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
