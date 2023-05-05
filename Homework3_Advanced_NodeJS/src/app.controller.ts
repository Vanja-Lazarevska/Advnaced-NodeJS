import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalGuard } from './guards/local.guard';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  };

  @Post('/login')
  @UseGuards(LocalGuard)
  async loginTheUser(@Request() request){
    return await this.authService.login(request.user)
    
  }

}