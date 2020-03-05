import { Controller, Body, Post, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserEntity } from '../../data-base/entities/identity/user-entity.entity';
import { User } from '../user/dtos/user';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authservice: AuthService, private readonly userservice: UserService){}


    @Post()
    @UsePipes(ValidationPipe)
    async addUser(@Body() user: User) {
        return this.authservice.signup(user);


    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: User) {
        return this.authservice.signin(signinDto);
    }

    @Get()
    getUsers() {
        return this.userservice.getUsers();
    }



}
