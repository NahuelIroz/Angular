#!/bin/bash
# Script para facilitar el despliegue en Vercel

echo "==================================="
echo "Despliegue en Vercel - tpFinal"
echo "==================================="
echo ""

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null
then
    echo "📦 Instalando Vercel CLI..."
    npm i -g vercel
fi

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

echo "✅ Verificando dependencias locales..."
npm install --if-needed

echo ""
echo "🔨 Compilando la aplicación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ El build falló. Verifica los errores arriba."
    exit 1
fi

echo ""
echo "✅ Build completado exitosamente"
echo ""
echo "📤 Iniciando despliegue en Vercel..."
echo ""

vercel --prod

echo ""
echo "✅ ¡Despliegue completado!"
echo ""
echo "Próximos pasos:"
echo "1. Accede a https://vercel.com/dashboard para ver tu proyecto"
echo "2. Configura el dominio personalizado si lo deseas"
echo "3. Los futuros cambios se desplegarán automáticamente con 'git push'"
