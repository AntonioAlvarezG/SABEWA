import { Injectable, Inject } from '@nestjs/common';
import { aboutpage } from '../data-base/entities/About/about.entity';
import { Repository } from 'typeorm';
import { Values } from '../data-base/entities/About/values.entity';
import { writeFileSync, existsSync } from 'fs';

@Injectable()
export class AboutService {
    constructor(
        @Inject('ABOUT_REPOSITORY') private readonly about: Repository<aboutpage>,
        @Inject('ABOUT_VALUES_REPOSITORY') private readonly values: Repository<Values>)
        {}


    // Add about Page 

    async addNewAbout(file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }, secondfile: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string },
         aboutMiTxt: string, aboutViTxt: string, aboutUsTxt:string) {
        const fileName = file.originalname;
        const file2 = secondfile.originalname;

        const dir = '../uploads/';
        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);
        const about = this.about.create();
        about.aboutHeImg = "http://localhost:3000/uploads/" + fileName;
        about.aboutUsImg = "http://localhost:3000/uploads/" + file2;
        about.aboutUsTxt = aboutUsTxt;
        about.aboutMiTxt = aboutMiTxt;
        about.aboutViTxt = aboutViTxt;

        return this.about.save(about);
    }


    private ensureDirectoryExistance(dir: string) {
        if (existsSync(dir)) {
            return;
        }
        // mkdirSync(dir, { recursive: true });
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
