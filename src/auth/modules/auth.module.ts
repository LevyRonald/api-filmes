import { UsersModule } from './../../users/modules/users.module';
import { AuthController } from './../controller/auth.controller';
import { AuthService } from './../services/auth.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { LocalStrategy } from '../strategies/local.strategy';
import { LoginValidationMiddleware} from '../middlewares/login-validation.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionsSchema } from 'src/sessions/entities/session.entity';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: process.env.KEY_MASTER_JWT,
    signOptions: { expiresIn: '8h' },
  }),
  MongooseModule.forFeature([{ name: Session.name, schema: SessionsSchema}])
],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule{ 
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoginValidationMiddleware).forRoutes('login')
  }
 }