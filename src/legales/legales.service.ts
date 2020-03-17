import { Injectable, Inject } from '@nestjs/common';
import { Legals } from '../data-base/entities/legales/legals.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LegalesService {
    constructor(@Inject('LEGALS_ENTITY_REPOSITORY') private readonly legals: Repository<Legals>){}



    async addNewLegal(type:string, legal:string, description:string){

        const legales = this.legals.create();
        legales.type = type;
        legales.legal = legal;
        legales.description = description;

        return this.legals.save(legales);

    }

    async getAlllegals(){
        return this.legals.find();
    }

    async getByType(type:string){
        return this.legals.createQueryBuilder('l')
            .where('l.type = :type', { type })
            .getMany();
    }
}
