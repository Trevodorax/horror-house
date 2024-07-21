import { Booking } from 'src/bookings/bookings.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
  
@Entity()
export class Session {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    theme: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    durationMinutes: number

    @Column()
    minNbParticipants: number

    @OneToMany(() => Booking, (booking) => booking.session)
    bookings: Booking[]
}
