import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
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
}
