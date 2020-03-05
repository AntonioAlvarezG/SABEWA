import { Injectable, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto';
import { User } from '../user/dtos/user';
import { compare } from 'bcryptjs';
import { IJwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(private readonly userservice: UserService, private readonly jwtService: JwtService){

    }


    async signup(signupDto: User) {
        const username = signupDto.username;
        const userExists =  await this.userservice.findOne(username).then();
       

        if (userExists) {
            throw new ConflictException('username or email already exists');
        }

        return this.userservice.createUSer(signupDto);
    }

    async signin(signinDto: User): Promise<{ token: string }> {
        const { username, password } = signinDto;

        const user: User = await this.userservice.findOne(username);
        

        if (!user) {
            throw new NotFoundException('user does not exist');
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException('invalid credentials');
        }

        const payload: IJwtPayload = {
            userId: user.userId,
            email: user.email,
            username: user.username,
        };

        const token = await this.jwtService.sign(payload);

        return { token };
    }
}
