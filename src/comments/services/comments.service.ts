import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private comment: Model<Comment>
  ) {}
  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.comment.create(createCommentDto);
  }

  findAll() {
    return this.comment.find().limit(20);
  }

  findOne(id: string) {
    return this.comment.findById(id);
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    return await this.comment.findByIdAndUpdate(id, updateCommentDto);
  }

  remove(id: string) {
    return this.comment.findByIdAndDelete(id);
  }
}
