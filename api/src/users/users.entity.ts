import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  passwordHash?: string;

  @Column({ type: 'simple-enum', enum: UserRole })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;
}
