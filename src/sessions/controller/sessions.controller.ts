import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionsService } from '../services/sessions.service';
import { CreateSessionDto } from '../dto/create-session.dto';
import { UpdateSessionDto } from '../dto/update-session.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get('/list')
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get('/findone/:id')
  findOne(@Param('id') id: string) {
    return this.sessionsService.findOne(id);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(id);
  }
}
