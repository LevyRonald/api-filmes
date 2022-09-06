import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/modules/auth.module';
import { UsersModule } from './users/modules/users.module';
import { TheatersModule } from './theaters/modules/theaters.module';
import { MoviesModule } from './movies/modules/movies.module';
import { CommentsModule } from './comments/modules/comments.module';
import { SessionsModule } from './sessions/modules/sessions.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule, AuthModule, TheatersModule, MoviesModule, CommentsModule, SessionsModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class AppModule {}
