import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTheaterDto } from '../dto/create-theater.dto';
import { UpdateTheaterDto } from '../dto/update-theater.dto';
import { Theater } from '../entities/theater.entity';

@Injectable()
export class TheatersService {
  constructor(
    @InjectModel(Theater.name) private theather: Model<Theater>
  ) { }
  async create(createTheaterDto: CreateTheaterDto): Promise<Theater> {
    return this.theather.create(createTheaterDto);
  }

  findAll() {
    return this.theather.find();
  }

  async findOne(id: string): Promise<Theater> {
    return await this.theather.findById(id);
  }

  update(id: number, updateTheaterDto: UpdateTheaterDto) {
    return `This action updates a #${id} theater`;
  }

  remove(id: number) {
    return `This action removes a #${id} theater`;
  }
}
