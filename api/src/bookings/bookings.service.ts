import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionsService } from 'src/sessions/sessions.service';
import { Booking } from './bookings.entity';
import { CreateBookingDto, DeleteBookingDto } from './bookings.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private sessionsService: SessionsService,
  ) {}

  async create(dto: CreateBookingDto): Promise<Booking> {
    const session = await this.sessionsService.findOneById(dto.sessionId);
    if (!session) {
      throw new NotFoundException('Session not found');
    }

    const booking = this.bookingRepository.create({
      ...dto,
      session,
      startTime: new Date(dto.startTime),
    });
    return this.bookingRepository.save(booking);
  }

  async delete(dto: DeleteBookingDto): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({ where: { id: dto.id } });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return this.bookingRepository.remove(booking);
  }

  async findBySessionId(sessionId: string): Promise<Booking[]> {
    return this.bookingRepository.find({
      where: { session: { id: sessionId } },
      relations: ['session'],
    });
  }
}
