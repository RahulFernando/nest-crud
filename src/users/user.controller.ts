import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  getUsers(): Array<User> {
    return this.userServices.getAllUsers();
  }

  @Post()
  saveUser(@Body() user: User): string {
    return this.userServices.insertUser(user);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userServices.getUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User): any {
    return this.userServices.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.userServices.deleteUser(id);
  }
}
