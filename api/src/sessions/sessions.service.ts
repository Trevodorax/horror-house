import {
    Injectable,
    NotFoundException,
    UnprocessableEntityException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
import { Session } from './sessions.entity';
import { CreateSessionDto, DeleteSessionDto, UpdateSessionDto } from './sessions.dto';
  
  @Injectable()
  export class SessionsService {
    constructor(
      @InjectRepository(Session)
      private sessionRepository: Repository<Session>,
    ) {}
  
    async create(dto: CreateSessionDto): Promise<Session> {
      const session = this.sessionRepository.create(dto);
      return this.sessionRepository.save(session);
    }
  
    async update(dto: UpdateSessionDto): Promise<Session> {
      const session = await this.findOneById(dto.id);
      if (!session) {
        throw new NotFoundException('Session not found');
      }
      
      Object.assign(session, dto);
      return this.sessionRepository.save(session);
    }
  
    async delete(dto: DeleteSessionDto): Promise<Session> {
      const sessionToDelete = await this.findOneById(dto.id);
      if (!sessionToDelete) {
        throw new NotFoundException('Session not found');
      }
      return this.sessionRepository.remove(sessionToDelete);
    }
  
    async list(): Promise<Session[]> {
      return this.sessionRepository.find();
    }
  
    async findOneById(id: string): Promise<Session | null> {
      return this.sessionRepository.findOne({ where: { id } });
    }
  }