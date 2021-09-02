import { AuthModule } from '@nest-i18n-test/auth';
import { PrismaModule } from '@nest-i18n-test/prisma';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import {
  AcceptLanguageResolver,
  I18nJsonParser,
  I18nModule,
} from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    I18nModule.forRootAsync({
      useFactory: async () => {
        return {
          fallbackLanguage: 'en',
          parserOptions: {
            path: path.join(__dirname, '/locales/'),
            watch: true, //enable live translations
          },
        };
      },
      parser: I18nJsonParser,
      resolvers: [AcceptLanguageResolver],
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter, // global filter
    },
  ],
})
export class AppModule {}
