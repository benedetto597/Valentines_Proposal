@echo off
chcp 65001 >nul
echo.
echo 🎀 Iniciando aplicación de San Valentín...
echo.

:: Verificar si Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js no está instalado
    echo Por favor instala Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js está instalado
echo.

:: Iniciar backend
echo 🚀 Iniciando backend...
cd backend

if not exist "node_modules\" (
    echo 📦 Instalando dependencias del backend...
    call npm install
)

start "Valentine Backend" cmd /k "npm run start:dev"
echo ✅ Backend corriendo en puerto 3001
echo.

:: Esperar un poco
timeout /t 3 /nobreak >nul

:: Iniciar frontend
echo 🎨 Iniciando frontend...
cd ..\frontend

if not exist "node_modules\" (
    echo 📦 Instalando dependencias del frontend...
    call npm install
)

start "Valentine Frontend" cmd /k "npm run dev"
echo ✅ Frontend corriendo en puerto 3000
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo ✨ ¡Aplicación lista!
echo.
echo 🌐 Abriendo navegador en: http://localhost:3000
echo.
echo Para detener los servidores, cierra las ventanas de comandos
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

:: Esperar 2 segundos y abrir navegador
timeout /t 2 /nobreak >nul
start http://localhost:3000

pause
