import { Module } from '@nestjs/common';
import { SessionsService } from '../services/sessions.service';
import { SessionsController } from '../controller/sessions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionsSchema } from '../entities/session.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Session.name, schema: SessionsSchema}])],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService]
})
export class SessionsModule {}
