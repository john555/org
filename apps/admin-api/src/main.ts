/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

import { AppModule } from './app/app.module';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
