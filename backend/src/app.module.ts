import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ValentineModule } from './valentine/valentine.module';

@Module({
  imports: [
    // Servir archivos estáticos desde la carpeta images
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images',
    }),
    ValentineModule,
  ],
})
export class AppModule {}
