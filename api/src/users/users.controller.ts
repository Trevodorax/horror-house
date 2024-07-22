import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { CreateUserSchema, userToResponse } from './users.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/rules.decorator';
import { UserRole } from './users.entity';
import { GetUser, UserPayload } from 'src/auth/decorators/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get()
  async listUsers() {
    const users = await this.usersService.list();

    return users.map(userToResponse);
  }

  @Get('me')
  async getAuthentcatedUser(@GetUser() user: UserPayload) {
    const foundUser = await this.usersService.findOneById(user.id);

    if (!foundUser) {
      throw new NotFoundException('You were not found in our systems.');
    }

    return userToResponse(foundUser);
  }

  @Roles(UserRole.SUPER_ADMIN)
  @Post()
  async createUser(@Body() dto: unknown) {
    const parsedDto = CreateUserSchema.parse(dto);

    const user = await this.usersService.create(parsedDto);
    return userToResponse(user);
  }

  @Roles(UserRole.SUPER_ADMIN)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.delete({ id });
  }
}
