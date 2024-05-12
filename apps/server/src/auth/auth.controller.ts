import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body(new ValidationPipe()) registerUserDto: CreateUserDto) {
    const { access_token } = await this.authService.register(registerUserDto);
    return { access_token, success: true };
  }

  @Post('login')
  async login(@Body(new ValidationPipe()) loginUserDto: LoginUserDto) {
    const { access_token } = await this.authService.login(loginUserDto);
    return { access_token, success: true };
  }
}
