import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movie: Model<Movie>
  ) {}
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movie.create(createMovieDto);
  }

  findAll() {
    return this.movie.find().limit(10);
  }

  async findOne(id: string) {
    return await this.movie.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: string) {
    return `This action removes a #${id} movie`;
  }
}
