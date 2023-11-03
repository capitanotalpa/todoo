import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    public async createUser(data: Prisma.UserCreateInput) {
        // passwords for test, will change to bcrypt on register
        return this.prismaService.user.create({
            data
        });
    }
}
