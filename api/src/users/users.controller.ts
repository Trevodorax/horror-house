import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/rules.decorator';
import { User, UserRole } from './users.entity';
import { GetUser } from 'src/auth/decorators/user.decorator';
import { z } from 'zod';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
}
