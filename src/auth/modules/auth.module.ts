import { AuthController } from './../controller/auth.controller';
import { AuthService } from './../services/auth.service';
import { Module } from '@nestjs/common';
@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}