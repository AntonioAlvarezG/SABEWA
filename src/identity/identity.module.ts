import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { Configuration } from 'src/config/config.keys';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth/auth.repository';

@Module({
  imports: [AuthRepository,DataBaseModule, PassportModule.register({
    defaultStrategy: 'jwt',
  }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: config.get(Configuration.JWT_SECRET),
          signOptions: {
            expiresIn: 3600,
          },
        };
      },
    })
],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, ConfigService, JwtStrategy, AuthRepository ],
  exports: [JwtStrategy, PassportModule],
})
export class IdentityModule {}
