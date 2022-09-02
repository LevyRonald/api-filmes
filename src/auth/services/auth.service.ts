import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from '../models/UserPayload';
import { UserToken } from 'src/auth/models/UserToken'
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
      ) {}

    async login(user: User): Promise<UserToken> {
        const payload: UserPayload = {
            email: user.email,
            name: user.name
        };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.usersService.findByEmail(email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if(isPasswordValid) {
                return {
                    name: user.name,
                    email: user.email
                }
            }
        }
        throw new Error('Email ou senha incorreto');
    }
}
