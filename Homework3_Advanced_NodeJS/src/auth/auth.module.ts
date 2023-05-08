import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RoleGuard } from 'src/guards/role.guard';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local-strategy';
import * as dotenv from 'dotenv'

dotenv.config()
const secret = process.env.SECRET_KEY
console.log('SECRRET HERE',secret)
@Module({
  imports: [UsersModule, JwtModule.register({
    secret: secret,
    signOptions: {expiresIn: '60s'}
  })],
  providers: [AuthService, JwtStrategy, LocalStrategy, RoleGuard],
  exports: [AuthService]
})
export class AuthModule {}
