import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param, UseGuards, UseInterceptors, Query, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Gallery } from '../data-base/entities/Gallery/gallery.entity';
import { NewsService } from './news.service';
import { News } from '../data-base/entities/News/news.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('News Page  End-Points')
@Controller('api/news')
export class NewsController {
    constructor(private readonly news: NewsService) {

    }

    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: News, isArray: true })
    @ApiOperation({ summary: 'Add new Post', description: 'insert a new' })
    @UseInterceptors(FileInterceptor('file'))
    addNewPost(
        @UploadedFile() file,
        @Body() body: { newsCatTxt: string, newsTitle: string, newsDescription: string }
    ) {
        return this.news.addNewPost(file, body.newsCatTxt, body.newsTitle, body.newsDescription);
    }

    @Get()
    @ApiResponse({ status: 200, type: News, isArray: true })
    @ApiOperation({ summary: 'Get all the post', description: 'Get all the news' })
    getPost() {
        return this.news.getPost();
    }

    @Put('/:newID')
    @ApiResponse({ status: 200, description: 'Succes updating', type: News, isArray: true })
    @ApiOperation({ summary: 'update Banners', description: 'update the home page banners' })
    updatePost(@Param('newID') newID: string,
        @Body() body: { newsCatTxt: string, newsImg: string, newsTitle: string, newsDescription: string}) {
        return this.news.updatePost(newID, body.newsCatTxt, body.newsImg, body.newsTitle, body.newsDescription);

    }



}

