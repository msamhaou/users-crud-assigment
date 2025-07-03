import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    // whitelist: true,
  }));
  app.enableCors({
    origin: 'http://localhost:3000',  // or '*' to allow all origins (not recommended for production)
    credentials: true,                 // if you use cookies/auth
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
