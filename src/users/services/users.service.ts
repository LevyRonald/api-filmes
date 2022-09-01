import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private user: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    }
    const newUser = this.user.create(data);
    return newUser;
  }

  findAll() {
    return this.user.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.user.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const data = {
      ...updateUserDto,
      password: await bcrypt.hash(updateUserDto.password, 10)
    }
    const updateUser = this.user.findByIdAndUpdate(id, data);
    return updateUser
  }

  remove(id: string) {
    return this.user.findByIdAndDelete(id);
  }
}
