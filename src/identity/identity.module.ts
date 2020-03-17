import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Configuration } from '../config/config.keys';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth/auth.repository';
export const jwtSecret = 'kljasdg873qdkdsa8qgedfgkj';

@Module({
  imports: [AuthRepository, ConfigModule,DataBaseModule, PassportModule.register({
    defaultStrategy: 'jwt',
  }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: 'kljasdg873qdkdsa8qgedfgkj',
          signOptions: {
            expiresIn: 3600,
          },
        };
      },
    })
],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, ConfigService, JwtStrategy, AuthRepository, ConfigModule ],
  exports: [JwtStrategy, PassportModule],
})
export class IdentityModule {}
