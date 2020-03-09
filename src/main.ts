import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const express = require('express')
  const options = new DocumentBuilder()
    .setTitle('Sorteo Anahuac API')
    .setDescription('API of the multimedia content of the sorteo anahuac site ')
    .setVersion('1.0')
    .addTag('BE: Sorteo Anahuac')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
