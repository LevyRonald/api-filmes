import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private user: Model<User>
    ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    return this.user.create(createUserDto);
  }

  findAll() {
    return this.user.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.user.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.user.findByIdAndUpdate(id, updateUserDto);
    return updateUser
  }

  remove(id: string) {
    return this.user.findByIdAndDelete(id);
  }
}
