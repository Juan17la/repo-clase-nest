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
  @Get('')
  getAllUsers() {
    return UsersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {}

  @Post()
  createUser(@Body() userPayload: CreateUserDto) {}

  @Delete(':id')
  deleteUser(@Param('id') id: string) {}

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: User) {}
}
