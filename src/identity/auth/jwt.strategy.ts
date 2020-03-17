import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt} from 'passport-jwt';
import { UnauthorizedException, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../../data-base/entities/identity/user-entity.entity';
import { Repository } from 'typeorm';
import { IJwtPayload} from './jwt-payload.interface';
import { UserService } from '../user/user.service';
import { InjectRepository} from '@nestjs/typeorm'; 
import { Configuration } from '../../config/config.keys';
import { ConfigService } from '../../config/config.service';
export const jwtSecret = 'kljasdg873qdkdsa8qgedfgkj';
export const jwtTTL = 60 * 60 * 10; // 10 hours (in seconds)

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userservice: UserService, private readonly _configService: ConfigService
        ) {
        
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'kljasdg873qdkdsa8qgedfgkj',
        });
    }

    async validate(payload: IJwtPayload){
        const {username} = payload;
        const user = await this.userservice.findOne(username);


        if(!user){
            throw new UnauthorizedException();
        }
        return payload;
       
    }
}

