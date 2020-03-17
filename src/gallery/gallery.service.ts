import { Injectable, Inject } from '@nestjs/common';
import { Gallery } from '../data-base/entities/Gallery/gallery.entity';
import { Repository } from 'typeorm';
import { writeFileSync, existsSync } from 'fs';

@Injectable()
export class GalleryService {
    constructor(@Inject('GALLERY_ENTITY_REPOSITORY') private readonly gallery: Repository<Gallery>){

    }


    // Add new Photo 

    async addNewPhoto(file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }
        , category: string) {
        const fileName = file.originalname;
        const dir = './uploads/';
        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);

        const photo = this.gallery.create();
        photo.image = "http://localhost:3000/uploads/" + fileName;
        photo.category = category;

        return this.gallery.save(photo);
    }
    private ensureDirectoryExistance(dir: string) {
        if (existsSync(dir)) {
            return;
        }
        // mkdirSync(dir, { recursive: true });
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
