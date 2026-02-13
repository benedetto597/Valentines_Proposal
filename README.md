# 💕 Valentine's Day Proposal App

Una hermosa aplicación web estilo periódico vintage para hacer tu propuesta de San Valentín especial.

## 🎯 Características

- **Diseño tipo periódico vintage** inspirado en "The Love Times"
- **Carrusel de imágenes** automático con transiciones suaves
- **Botones interactivos** que cambian dinámicamente:
  - El botón "Acepto" crece cada vez que ella intenta decir "No"
  - El botón "No" se achica progresivamente
  - Mensajes persuasivos que cambian
- **Pantalla de aceptación especial** con:
  - Imagen de tulipanes en pantalla completa
  - Corazones flotantes animados
  - Mensaje personalizable en lettering
- **100% Responsive** - perfecto en móvil, tablet y escritorio
- **Backend NestJS** para servir imágenes y datos
- **Frontend Next.js** con animaciones Framer Motion
- **Desplegable en Vercel** con configuración incluida

## 📁 Estructura del Proyecto

```
valentine-app/
├── backend/              # NestJS API
│   ├── src/
│   │   ├── valentine/   # Módulo de Valentine
│   │   ├── main.ts
│   │   └── app.module.ts
│   ├── images/          # 📸 COLOCA TUS IMÁGENES AQUÍ
│   ├── package.json
│   └── vercel.json
│
└── frontend/            # Next.js App
    ├── src/
    │   ├── app/
    │   └── components/
    ├── package.json
    └── next.config.js
```

## 🚀 Instalación y Uso Local

### Backend

1. Navega a la carpeta del backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

3. **IMPORTANTE: Agrega tus imágenes**
   - Coloca tus fotos en la carpeta `backend/images/`
   - **OBLIGATORIO:** Incluye una imagen llamada `tulipanes.jpg` para la pantalla de aceptación
   - Formatos soportados: JPG, JPEG, PNG, GIF, WEBP
   - Nombra tus archivos con números para controlar el orden:
     - `tulipanes.jpg` (obligatorio)
     - `01-primera-cita.jpg`
     - `02-vacaciones.jpg`
     - `03-momento-especial.jpg`

4. Inicia el servidor de desarrollo:
```bash
npm run start:dev
```

El backend estará corriendo en `http://localhost:3001`

### Frontend

1. Abre otra terminal y navega a la carpeta del frontend:
```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env.local`:
```bash
cp .env.example .env.local
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará corriendo en `http://localhost:3000`

## 🌐 Despliegue en Vercel

### Desplegar el Backend

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Desde la carpeta `backend`:
```bash
cd backend
vercel
```

3. Sigue las instrucciones de Vercel
4. **Guarda la URL del backend** (algo como: `https://tu-backend.vercel.app`)

### Desplegar el Frontend

1. Desde la carpeta `frontend`:
```bash
cd frontend
```

2. Crea un archivo `.env.production`:
```bash
NEXT_PUBLIC_API_URL=https://tu-backend.vercel.app
```

3. Despliega:
```bash
vercel
```

4. En la configuración de Vercel, asegúrate de agregar la variable de entorno:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: URL de tu backend

## 🎨 Personalización

### Modificar el Mensaje

Edita el archivo `backend/src/valentine/valentine.service.ts`:

```typescript
getValentineMessage() {
  return {
    title: "TU TÍTULO AQUÍ",
    subtitle: "Tu subtítulo aquí",
    heading: "TU ENCABEZADO",
    message: `Tu mensaje personalizado aquí...`,
    footer: "TU FRASE FINAL",
    // Mensaje que aparece sobre la imagen de tulipanes
    acceptanceMessage: "¡Eres mi amor eterno! 💕",
    // ...
  };
}
```

### Cambiar el Mensaje de los Tulipanes

El mensaje que aparece sobre la imagen de tulipanes cuando ella acepta es editable.
Busca `acceptanceMessage` en el mismo archivo y cámbialo por tu mensaje personalizado.

### Cambiar Estilos

Los estilos principales están en:
- `frontend/src/app/globals.css` - Estilos globales
- `frontend/src/components/NewspaperPage.tsx` - Componente principal
- `frontend/tailwind.config.ts` - Configuración de Tailwind

## 🔧 Scripts Disponibles

### Backend
```bash
npm run start:dev   # Desarrollo con hot-reload
npm run build       # Build para producción
npm run start:prod  # Ejecutar producción
```

### Frontend
```bash
npm run dev    # Desarrollo
npm run build  # Build para producción
npm run start  # Ejecutar producción
npm run lint   # Linter
```

## 📸 Tips para las Imágenes

1. **Imagen obligatoria:** `tulipanes.jpg` - Esta se mostrará en la pantalla de aceptación
2. **Tamaño recomendado para tulipanes:** 1920x1080 px o ratio 16:9
3. **Tamaño recomendado para carrusel:** 1200x800 px o ratio 3:2
4. **Formato:** JPG para fotos, PNG para imágenes con transparencia
5. **Peso:** Optimiza tus imágenes a menos de 1MB cada una
6. **Orden:** Nombra con números: `01-`, `02-`, `03-`, etc.
7. **Cantidad de fotos del carrusel:** Funciona mejor con 4-8 imágenes

## 💡 Solución de Problemas

### Las imágenes no se ven
- Verifica que las imágenes estén en `backend/images/`
- Asegúrate de que el backend esté corriendo en el puerto 3001
- Revisa la consola del navegador para errores

### Error de CORS
- Verifica que la URL del frontend esté en la configuración de CORS del backend
- En desarrollo: `http://localhost:3000`
- En producción: tu URL de Vercel

### El backend no despliega en Vercel
- Asegúrate de que `vercel.json` esté en la raíz de `backend/`
- Verifica que todas las dependencias estén en `package.json`
- Las imágenes deben estar incluidas en el repositorio para producción

## 📝 Notas Adicionales

- **Botones interactivos:** El botón "Acepto" crece y cambia de mensaje cada vez que ella intenta decir "No"
- **100% Responsive:** Funciona perfectamente en móviles iOS y Android, tablets y escritorio
- **Pantalla de aceptación:** Cuando acepta, ve una pantalla completa especial con tulipanes y mensaje personalizado
- Las animaciones son suaves y optimizadas para rendimiento
- Los botones táctiles están optimizados para móviles
- Sin necesidad de hacer zoom en dispositivos móviles
- Lee `NUEVAS-FUNCIONALIDADES.md` para detalles sobre las características interactivas

## 🎉 Hacerlo simple es siempre un acto de generosidad artística

---

Hecho con ❤️ por Benedeπo
