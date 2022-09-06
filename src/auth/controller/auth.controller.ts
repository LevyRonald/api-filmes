import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IsPublic } from '../decorators/is-public.decorator';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthRequest } from '../models/AuthRequest';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    const user = req as AuthRequest
    const userID = user.user.email
    const token = this.authService.login(req.user);
    const userToken = (await token).access_token
    this.authService.sessionUser(userID, userToken)
    return token
  }
}