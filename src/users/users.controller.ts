import {
  Body,
  Controller,
  Delete,
  BadRequestException,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getAllUsers() {
    const users = this.usersService.getAllUsers()
    if (!users) {
      throw new NotFoundException('No users found');
    }
    return users;
  }

  @Get("active")
  getAllActiveUsers() {
    const users = this.usersService.getAllActiveUser();
    if (!users) {
      throw new NotFoundException('No active users found');
    }
    return users;
  }

//   @Get(':id')
//   getUserById(@Param('id') id: string) {}
//
//   @Post()
//   createUser(@Body() userPayload: CreateUserDto) {}
//
//   @Delete(':id')
//   deleteUser(@Param('id') id: string) {}
//
//   @Put(':id')
//   updateUser(@Param('id') id: string, @Body() changes: User) {}
}
