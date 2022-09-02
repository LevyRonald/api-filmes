import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { TheatersController } from '../controller/theaters.controller';
import { Theater, theatersSchema } from '../entities/theater.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Theater.name, schema: theatersSchema}])],
  controllers: [TheatersController],
  providers: [TheatersService]
})
export class TheatersModule {}
