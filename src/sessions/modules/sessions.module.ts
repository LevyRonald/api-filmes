import { Module } from '@nestjs/common';
import { SessionsService } from '../services/sessions.service';
import { SessionsController } from '../controller/sessions.controller';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsModule {}
