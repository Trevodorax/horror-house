import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/rules.decorator';
import { UserRole } from 'src/users/users.entity';
import { CreateSessionDto, UpdateSessionDto } from './sessions.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Public()
  @Get()
  async listSessions() {
    const sessions = await this.sessionsService.list();
    return sessions;
  }

  @Public()
  @Get(':id')
  async getSession(@Param('id') id: string) {
    const session = await this.sessionsService.findOneById(id);
    if (!session) {
      throw new NotFoundException('Session not found');
    }
    return session;
  }

  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post()
  async createSession(@Body() createSessionDto: CreateSessionDto) {
    const session = await this.sessionsService.create(createSessionDto);
    return session;
  }

  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Put(':id')
  async updateSession(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    updateSessionDto.id = id;
    const session = await this.sessionsService.update(updateSessionDto);
    return session;
  }

  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete(':id')
  async deleteSession(@Param('id') id: string) {
    return this.sessionsService.delete({ id });
  }
}