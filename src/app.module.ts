import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './data-base/data-base.module';
import { GalleryModule } from './gallery/gallery.module';
import { NewsModule } from './news/news.module';
import { IdentityModule } from './identity/identity.module';
import { ConfigModule } from './config/config.module';
import { LegalesModule } from './legales/legales.module';
import { DatesModule } from './dates/dates.module';
import { AwardsModule } from './awards/awards.module';


@Module({
  imports: [DataBaseModule,GalleryModule, NewsModule, IdentityModule, ConfigModule, LegalesModule, DatesModule, AwardsModule],
  controllers: [AppController],
  providers: [AppService, IdentityModule, ConfigModule],
})
export class AppModule {}
