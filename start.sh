#!/bin/bash

echo "🎀 Iniciando aplicación de San Valentín..."
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si node está instalado
if ! command -v node &> /dev/null
then
    echo -e "${RED}❌ Node.js no está instalado${NC}"
    echo "Por favor instala Node.js desde: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js está instalado${NC}"
echo ""

# Iniciar backend
echo -e "${YELLOW}🚀 Iniciando backend...${NC}"
cd backend

if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias del backend..."
    npm install
fi

npm run start:dev &
BACKEND_PID=$!
echo -e "${GREEN}✅ Backend corriendo en puerto 3001${NC}"
echo ""

# Esperar un poco para que el backend inicie
sleep 3

# Iniciar frontend
echo -e "${YELLOW}🎨 Iniciando frontend...${NC}"
cd ../frontend

if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias del frontend..."
    npm install
fi

npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}✅ Frontend corriendo en puerto 3000${NC}"
echo ""

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ ¡Aplicación lista!${NC}"
echo ""
echo "🌐 Abre tu navegador en: http://localhost:3000"
echo ""
echo "Para detener los servidores, presiona Ctrl+C"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Esperar a que el usuario presione Ctrl+C
wait
