import { Injectable, Inject } from '@nestjs/common';
import { Gallery } from '../data-base/entities/Gallery/gallery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GalleryService {
    constructor(@Inject('GALLERY_ENTITY_REPOSITORY') private readonly gallery: Repository<Gallery>){

    }


    // Add new Photo 

    async addNewPhoto(image: string, category: string) {

        const photo = this.gallery.create();
        photo.image = image;
        photo.category = category;

        return this.gallery.save(photo);
    }

    // Get all the Photos

    async getPhotos() {
        return this.gallery.find();
    }


    async updatePhoto(photoId: string,image: string, category: string) {

        const photo = await this.gallery.findOne(photoId);
        photo.image = image;
        photo.category = category;

        return this.gallery.save(photo);
    }
}
