import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5005;
  const HOST = process.env.HOST;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(PORT, HOST, () =>
      console.log(`Server running on port - ${PORT}`),
  );
}
start();
