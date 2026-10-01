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
import type { User } from './user.interface';
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

  @Get(':name')
  getUserByName(@Param('name') name: string) {
    const user = this.usersService.getUserByName(name);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get("active")
  getAllActiveUsers() {
    const users = this.usersService.getAllActiveUser();
    if (!users) {
      throw new NotFoundException('No active users found');
    }
    return users;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.usersService.getUserById(id)
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  createUser(@Body() userPayload: CreateUserDto) {
    const user = this.usersService.createUser(userPayload);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      msg: 'User created successfully',
      userdata: user
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const user = this.usersService.deleteUser(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: User) {
    const user = this.usersService.updateUser(id, changes);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
