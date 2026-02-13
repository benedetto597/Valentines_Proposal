import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ValentineService {
  private readonly imagesPath = path.join(__dirname, '..', '..', 'images');

  getImageList() {
    try {
      // Leer todos los archivos de la carpeta images
      const files = fs.readdirSync(this.imagesPath);
      
      // Filtrar solo archivos de imagen
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );

      // Retornar URLs completas de las imágenes
      return {
        images: imageFiles.map(file => `/images/${file}`),
        count: imageFiles.length
      };
    } catch (error) {
      console.error('Error reading images directory:', error);
      return { images: [], count: 0 };
    }
  }

  getValentineMessage() {
    return {
      title: "MAY I BE YOUR",
      subtitle: "Forever Valentine?",
      heading: "THE DAY I CHOOSE YOU",
      message: `Tu voz incendia mis silencios,
tu piel despierta mis deseos.
Eres la chispa, que enciende
mi alma cada que nos vemos.

Eres mi risa, mi travesura,
mi dulce caos, mi aventura.

Amor tu eres mi mapa y mi brújula,
tus besos son mi ruta.
Si la vida fuera un baile,
tú serías mi música absoluta.

Más que el mundo gira sin medida,
quiero estar en tu vida,
y en cada amanecer sentir
que contigo quiero compartir.

Organizó mi tiempo y solo quiero
caminar contigo todo el camino,
y en cada paso recordar:
que contigo siempre quiero estar.`,
      footer: "YOU + ME = Destiny !",
      // 🌹 MENSAJE QUE APARECE EN LA IMAGEN DE TULIPANES 🌹
      // Edita este texto para personalizarlo
      acceptanceMessage: "Te amo mi bonita",
      date: new Date().toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  }
}
