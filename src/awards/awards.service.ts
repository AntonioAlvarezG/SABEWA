import { Injectable, Inject } from '@nestjs/common';
import { Awards } from '../data-base/entities/awards/awards.entity';
import { Repository } from 'typeorm';
import { existsSync, writeFileSync } from 'fs';

@Injectable()
export class AwardsService {
    constructor(@Inject('AWARD_ENTITY_REPOSITORY') private readonly awards: Repository<Awards>){

    }




    async  addNewAward(category: string, catName: string, awardName: string, awardSubName: string, awardPlace: string, description:string,
        file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }  ){
        const fileName = file.originalname;
        const dir = './uploads/';

        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);
        

        const award = this.awards.create();
        award.category = category;
        award.catName = catName;
        award.awardName = awardName;
        award.awardSubName = awardSubName;
        award.awardPlace = awardPlace;
        award.description = description;
        award.awardImg = "http://localhost:3000/uploads/" + fileName;

        return this.awards.save(award);
    }

    async getAllAwards(){
        return this.awards.find();
    }

    async getByCategory(category: string) {
        return this.awards.createQueryBuilder('l')
            .where('l.category = :category', { category })
            .getMany();
    }



    private ensureDirectoryExistance(dir: string) {
        if (existsSync(dir)) {
            return;
        }
        // mkdirSync(dir, { recursive: true });
    }
}
