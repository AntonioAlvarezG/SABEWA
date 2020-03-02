import { Injectable, Inject } from '@nestjs/common';
import { Gallery } from '../data-base/entities/Gallery/gallery.entity';
import { Repository } from 'typeorm';
import { News } from '../data-base/entities/News/news.entity';

@Injectable()
export class NewsService {
    constructor(@Inject('NEWS_ENTITY_REPOSITORY') private readonly news: Repository<News>) {

    }


    // Add new Photo 

    async addNewPost(newsCatTxt: string, newsImg: string, newsTitle: string, newsDescription: string) {

        const post = this.news.create();
        post.newsCatTxt = newsCatTxt;
        post.newsImg = newsImg;
        post.newsTitle = newsTitle;
        post.newsDescription = newsDescription;

        return this.news.save(post);
    }

    // Get all the Photos

    async getPost() {
        return this.news.find();
    }


    async updatePost(newID, newsCatTxt: string, newsImg: string, newsTitle: string, newsDescription: string) {

        const post = await this.news.findOne(newID);
        post.newsCatTxt = newsCatTxt;
        post.newsImg = newsImg;
        post.newsTitle = newsTitle;
        post.newsDescription = newsDescription;

        return this.news.save(post);
    }
}

