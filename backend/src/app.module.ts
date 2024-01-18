import { Module } from '@nestjs/common';
import { SwaggerModule } from './config/swagger/swagger.module';
import { ConfigModule } from './config/environments/config.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database/database.module';
import { JwtAuthGuard } from './auth/shared/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AccessControlModule } from './access-control/access-control.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      schema: 'postgres',
      entities:  ['./dist/**/*.entity{.ts,.js}'],
      migrations: ["./dist/migrations/*{.ts,.js}"],
      migrationsRun: true,
    }),
    SwaggerModule,
    ConfigModule,
    DatabaseModule,
    AuthModule,
    AccessControlModule,
    UserModule,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
