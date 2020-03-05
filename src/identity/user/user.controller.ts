import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
    constructor(private readonly user: UserService){}

    
    @UseGuards(AuthGuard())
    @Get()
    getUsers() {
        return this.user.getUsers();
    }

}
