import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { CreateUserSchema, userToResponse } from './users.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/rules.decorator';
import { UserRole } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get()
  async listUsers() {
    const users = await this.usersService.list()

    return users.map(userToResponse)
  }

  @Roles(UserRole.SUPER_ADMIN)
  @Post()
  async createUser(@Body() dto: unknown) {
    const parsedDto = CreateUserSchema.parse(dto)

    const user = await this.usersService.create(parsedDto)
    return userToResponse(user)
  }
}
