import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../data-base/entities/identity/user-entity.entity';
import { genSalt, hash } from 'bcryptjs';
import { User } from './dtos/user';

@Injectable()
export class UserService {
    constructor(@Inject('USER_ENTITY_REPOSITORY') private readonly users: Repository<UserEntity>,){

    }


    async createUSer(user: User) {
        const salt = await genSalt(10);
        user.password = await hash(user.password, salt);
       return this.users.save(user);


    }

    async findOne(username: string) {
        return this.users.findOne({
            username,
        });
        
    }

    async getUsers() {
        return this.users.find();
    }


}
