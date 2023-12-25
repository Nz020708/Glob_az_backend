import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const options = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
  };
  app.enableCors(options);
  await app.listen(3010);
}
bootstrap();
