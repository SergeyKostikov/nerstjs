import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    const res = await this.userService.findAll()
    console.log(res)
    return res
  }
  @Post()
  async addUser(@Req() request: Request): Promise<User> {
    const res = await this.userService.createOne(request.body)
    return res
  }
}
