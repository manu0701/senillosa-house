#!/bin/bash

# Script de deployment para Senillosa Homes
# Uso: ./deploy.sh

echo "🏠 Senillosa Homes - Deployment Script"
echo "======================================"
echo ""

# Verificar si node está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18 o superior."
    echo "   Descarga desde: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js versión: $(node --version)"
echo ""

# Verificar si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "❌ npm no está instalado."
    exit 1
fi

echo "✅ npm versión: $(npm --version)"
echo ""

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

# Build del proyecto
echo "🔨 Compilando proyecto..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completado exitosamente!"
    echo ""
    echo "📁 Los archivos están en la carpeta: dist/"
    echo ""
    echo "🚀 Opciones para deployar:"
    echo ""
    echo "1. Vercel CLI:"
    echo "   npm install -g vercel"
    echo "   vercel --prod"
    echo ""
    echo "2. Arrastrar la carpeta 'dist' a vercel.com"
    echo ""
    echo "3. Conectar con GitHub y auto-deploy"
    echo ""
else
    echo ""
    echo "❌ Error en el build. Por favor revisa los errores arriba."
    exit 1
fi
