import { Module } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { MoviesController } from '../controller/movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
