import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/rules.decorator';
import { UserRole } from 'src/users/users.entity';
import { CreateBookingSchema, DeleteBookingSchema } from './bookings.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Public()
  @Post()
  async createBooking(@Body() dto: unknown) {
    const parsedDto = CreateBookingSchema.parse(dto);
    return this.bookingsService.create(parsedDto);
  }

  @Roles(UserRole.SUPER_ADMIN)
  @Delete(':id')
  async deleteBooking(@Param('id') id: string) {
    const parsedDto = DeleteBookingSchema.parse({ id });
    return this.bookingsService.delete(parsedDto);
  }

  @Public()
  @Get('sessions/:id')
  async getBookingsForSession(@Param('id') id: string) {
    return this.bookingsService.findBySessionId(id)
  }
}
