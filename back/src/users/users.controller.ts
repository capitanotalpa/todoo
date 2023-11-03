import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/')
    public async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Post('/')
    public async createUser(@Body() userInfo: { name: string, password: string }): Promise<User> {
        return this.usersService.createUser(userInfo);
    }
}
