import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserDto } from './dto/user.dto';
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
    console.log(request.user) // vidi sto vrakja za da probamo da gi spoimo validateUser i login 
    return await this.authService.login(request.user)
    
  }

  @Post('register')
  async registerUser(@Body() body: UserDto) {
    const user = await this.authService.registerUserInDb(body)
    return {
      message: 'You are registered'
    }

  }

}