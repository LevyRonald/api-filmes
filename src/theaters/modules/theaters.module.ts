import { Module } from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { TheatersController } from '../controller/theaters.controller';

@Module({
  controllers: [TheatersController],
  providers: [TheatersService]
})
export class TheatersModule {}
