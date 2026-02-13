import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir peticiones desde el frontend
  const frontendUrls = [
    'http://localhost:3000',
    process.env.FRONTEND_URL || '',
  ].filter(Boolean);

  app.enableCors({
    origin: frontendUrls,
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Backend running on port ${port}`);
}
bootstrap();
