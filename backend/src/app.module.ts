import { Module } from '@nestjs/common';
import { SwaggerModule } from './config/swagger/swagger.module';
import { ConfigModule } from './config/environments/config.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database/database.module';
import { JwtAuthGuard } from './auth/shared/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AccessControlModule } from './access-control/access-control.module';

@Module({
  imports: [
    SwaggerModule,
    ConfigModule,
    DatabaseModule,
    AuthModule,
    AccessControlModule,
    UserModule,
    JwtAuthGuard,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
