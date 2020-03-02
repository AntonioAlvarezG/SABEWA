import { Injectable, Inject } from '@nestjs/common';
import { About } from '../data-base/entities/About/about.entity';
import { Repository } from 'typeorm';
import { Values } from '../data-base/entities/About/values.entity';

@Injectable()
export class AboutService {
    constructor(
        @Inject('ABOUT_REPOSITORY') private readonly about: Repository<About>,
        @Inject('ABOUT_VALUES_REPOSITORY') private readonly values: Repository<Values>)
        {}


    // Add about Page 

    async addNewAbout(aboutHeImg: string, aboutUsImg: string, aboutMiTxt: string, aboutViTxt: string, aboutUsTxt:string) {

        const about = this.about.create();
        about.aboutHeImg = aboutHeImg;
        about.aboutUsImg = aboutUsImg;
        about.aboutUsTxt = aboutUsTxt;
        about.aboutMiTxt = aboutMiTxt;
        about.aboutViTxt = aboutViTxt;

        return this.about.save(about);
    }

    async getAbout(){
       return this.about.find(); 
    }

    async updateAbout(pageId:string, aboutHeImg: string, aboutUsImg: string, aboutMiTxt: string, aboutViTxt: string, aboutUsTxt: string) {

        const about = await this.about.findOne(pageId);
        about.aboutHeImg = aboutHeImg;
        about.aboutUsImg = aboutUsImg;
        about.aboutUsTxt = aboutUsTxt;
        about.aboutMiTxt = aboutMiTxt;
        about.aboutViTxt = aboutViTxt;

        return this.about.save(about);
    }



    // values 


    async addNewValue(value: string) {

        const values = this.values.create();
        values.value = value;
       

        return this.values.save(values);
    }

    async getValues(){
        return this.values.find();
    }

    async updateValues(valueID: string, value: string) {

        const values = await this.values.findOne(valueID);
        values.value = value;


        return this.values.save(values);
    }


}
