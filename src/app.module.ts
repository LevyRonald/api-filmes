import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/modules/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
