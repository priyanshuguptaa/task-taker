/* eslint-disable prettier/prettier */
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from 'src/DTO/registerUser.dto';
import { UserLoginDto } from 'src/DTO/userLogin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  registration(@Body(ValidationPipe) regDTO: RegisterUserDto) {
    console.log('register controller');
    return this.authService.registerUser(regDTO);
  }

  @Post('login')
  signin(@Body(ValidationPipe) loginDTO: UserLoginDto) {
    console.log('login controller');
    return this.authService.loginUser(loginDTO);
  }
}
