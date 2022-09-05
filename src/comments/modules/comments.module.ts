import { Module } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CommentsController } from '../controller/comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, moviesSchema } from '../entities/comment.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Comment.name, schema: moviesSchema}])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
