import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from '../dto/create-session.dto';
import { UpdateSessionDto } from '../dto/update-session.dto';
import { Session } from '../entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name) private session: Model<Session>
  ) {}

  findAll() {
    return this.session.find();
  }

  findOne(id: string) {
    return this.session.findById(id);
  }

  remove(id: string) {
    return this.session.findByIdAndDelete(id);
  }
}
