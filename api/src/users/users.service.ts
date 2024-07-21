import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto, DeleteUserDto } from './users.dto';
import { hash } from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(dto.email)
    if(existingUser !== null) {
      throw new UnprocessableEntityException('This email is already taken.')
    }

    const user = this.userRepository.create({
      ...dto,
      passwordHash: await this.passwordToHash(dto.password),
    })
    const createdUser = await this.userRepository.save(user)

    return createdUser
  }

  async delete(dto: DeleteUserDto): Promise<User> {
    const userToDelete = await this.findOneById(dto.id)
    if(!userToDelete) {
      throw new NotFoundException('User not found')
    }
    return this.userRepository.remove(userToDelete)
  }

  async list() {
    return this.userRepository.find()
  }

  async findOneById(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  private async passwordToHash(password: string): Promise<string> {
    const saltOrRounds = 10;
    const passwordHash = await hash(password, saltOrRounds);
    return passwordHash;
  }
}
