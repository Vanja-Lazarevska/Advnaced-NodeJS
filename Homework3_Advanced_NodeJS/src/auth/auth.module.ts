import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RoleGuard } from 'src/guards/role.guard';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local-strategy';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: 'jwt_secret_key',
    signOptions: {expiresIn: '60s'}
  })],
  providers: [AuthService, JwtStrategy, LocalStrategy, RoleGuard],
  exports: [AuthService]
})
export class AuthModule {}
