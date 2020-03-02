import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param, UseGuards, UseInterceptors, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GalleryService } from './gallery.service';
import { Gallery } from '../data-base/entities/Gallery/gallery.entity';

@ApiTags('Gallery Page  End-Points')
@Controller('api/gallery')
export class GalleryController {
    constructor(private readonly gallery: GalleryService){

    }

    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Gallery, isArray: true })
    @ApiOperation({ summary: 'Add new Image', description: 'Add a new image to the gallery' })
    addNewPhoto(
        @Body() body: { image: string, category: string}
    ) {
        return this.gallery.addNewPhoto(body.image, body.category);
    }

    @Get()
    @ApiResponse({ status: 200, type: Gallery, isArray: true })
    @ApiOperation({ summary: 'Get all the banners', description: 'Get all the Banners for the home page slider' })
    getPhotos() {
        return this.gallery.getPhotos();
    }

    @Put('gallery/:photoId')
    @ApiResponse({ status: 200, description: 'Succes updating', type: Gallery, isArray: true })
    @ApiOperation({ summary: 'update Banners', description: 'update the home page banners' })
    updatePhoto(@Param('photoId') photoId: string,
        @Body() body: { image: string, category: string }) {
        return this.gallery.updatePhoto(photoId, body.image, body.category);

    }



}
