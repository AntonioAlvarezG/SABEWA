import { Injectable, Inject } from '@nestjs/common';
import { Dates } from '../data-base/entities/dates/dates.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatesService {
    constructor(@Inject('DATE_ENTITY_REPOSITORY') private readonly dates: Repository<Dates>) { }



    async addNewDate(date:string, description:string){
        const dates = this.dates.create();
        dates.date = date;
        dates.description = description;

        return this.dates.save(dates);
    }

    async getAllDates(){
        return this.dates.find();
    }
}
