import { Session } from 'src/sessions/sessions.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';
  
@Entity()
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    startTime: Date;

    @Column()
    nbParticipants: number

    @Column()
    clientEmail: string

    @ManyToOne(
        () => Session,
        (session) => session.bookings,
        { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
    )
    session: Session;
}
