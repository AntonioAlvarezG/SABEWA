import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  controllers: [GalleryController],
  providers: [GalleryService]
})
export class GalleryModule {}
