# 🎀 GUÍA RÁPIDA - Propuesta de San Valentín

## ⚡ Inicio Rápido (5 minutos)

### 1️⃣ Preparar las Imágenes

1. Ve a la carpeta: `backend/images/`
2. Borra el archivo `README.md` (es solo instrucciones)
3. Copia allí tus fotos favoritas con tu novia
4. Nómbralas así:
   - `01-nuestra-primera-cita.jpg`
   - `02-en-la-playa.jpg`
   - `03-cumpleaños.jpg`
   - etc.

**💡 Tip:** Entre 4 y 8 fotos es lo ideal

### 2️⃣ Instalar y Correr

Abre dos terminales (ventanas de comandos):

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### 3️⃣ Ver tu Propuesta

Abre tu navegador y ve a: `http://localhost:3000`

¡Listo! 🎉

---

## 🎨 Personalizar el Mensaje

### Cambiar el Texto Principal

Abre el archivo: `backend/src/valentine/valentine.service.ts`

Busca la función `getValentineMessage()` y edita:

```typescript
getValentineMessage() {
  return {
    title: "WILL YOU BE MY",           // ← Cambia esto
    subtitle: "Forever Valentine?",     // ← Y esto
    heading: "THE DAY I CHOOSE YOU",   // ← Y esto
    message: `
      Escribe aquí tu mensaje de amor personalizado.
      
      Puedes usar varios párrafos.
      
      Cada línea en blanco crea un nuevo párrafo.
    `,
    footer: "YOU + ME = Destiny !",    // ← Frase final
```

### Guardar los Cambios

El backend se recarga automáticamente. Solo **refresca el navegador** (F5).

---

## 🌐 Subir a Internet (Vercel)

### Paso 1: Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con tu cuenta de GitHub/GitLab
3. Es **gratis** para proyectos personales

### Paso 2: Subir tu Código a GitHub

1. Crea un repositorio nuevo en GitHub
2. Sube todo el proyecto:

```bash
cd valentine-app
git init
git add .
git commit -m "Mi propuesta de San Valentín"
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Paso 3: Desplegar Backend

1. En Vercel, haz clic en "Add New Project"
2. Importa tu repositorio de GitHub
3. Selecciona la carpeta `backend`
4. Despliega
5. **Copia la URL** que te da Vercel (ej: `https://mi-backend.vercel.app`)

### Paso 4: Desplegar Frontend

1. En Vercel, "Add New Project" de nuevo
2. Importa el mismo repositorio
3. Selecciona la carpeta `frontend`
4. En "Environment Variables" agrega:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: la URL del backend que copiaste
5. Despliega

### Paso 5: ¡Compartir!

Vercel te dará una URL como: `https://mi-propuesta.vercel.app`

Envíasela a tu novia 💕

---

## 🎯 Consejos

### Para las Fotos:
- ✅ Usa fotos de buena calidad
- ✅ Elige momentos especiales juntos
- ✅ Mezcla fotos recientes y antiguas
- ✅ Asegúrate de que se vean bien en horizontal

### Para el Mensaje:
- ✅ Escribe desde el corazón
- ✅ Menciona momentos específicos que vivieron
- ✅ No te preocupes por la longitud, ajusta lo que necesites
- ✅ Revisa la ortografía

### Para el Día:
- ✅ Prueba la app antes del 14 de febrero
- ✅ Asegúrate de que funcione en el celular de ella
- ✅ Ten un plan B por si internet falla (muéstrale en tu celular)
- ✅ Captura su reacción en video 🎥

---

## ❓ Problemas Comunes

### "No veo las imágenes"
→ Asegúrate de que:
1. Las imágenes estén en `backend/images/`
2. El backend esté corriendo (`npm run start:dev`)
3. El nombre del archivo no tenga espacios

### "Error al cargar"
→ Verifica que:
1. Ambos servidores (backend y frontend) estén corriendo
2. El backend esté en el puerto 3001
3. El frontend esté en el puerto 3000

### "No funciona en Vercel"
→ Recuerda:
1. Subir las imágenes al repositorio de GitHub
2. Configurar la variable de entorno `NEXT_PUBLIC_API_URL`
3. Esperar 2-3 minutos después del deploy

---

## 💌 Checklist Final

Antes de mostrarle la propuesta a tu novia:

- [ ] Agregué todas mis fotos favoritas
- [ ] Personalicé el mensaje principal
- [ ] Probé la app en mi computadora
- [ ] Probé la app en mi celular
- [ ] La app funciona correctamente
- [ ] Revisé la ortografía
- [ ] Tengo el enlace listo para compartir
- [ ] Estoy listo para su respuesta ❤️

---

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:

1. Lee los mensajes de error en la terminal
2. Verifica que instalaste todas las dependencias (`npm install`)
3. Asegúrate de estar en la carpeta correcta
4. Revisa el archivo `README.md` principal
