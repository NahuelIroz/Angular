# Script para facilitar el despliegue en Vercel (Windows PowerShell)

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Despliegue en Vercel - tpFinal" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json no encontrado. Asegúrate de estar en el directorio raíz del proyecto." -ForegroundColor Red
    exit 1
}

# Verificar si Vercel CLI está instalado
try {
    $vercelCheck = & vercel --version 2>$null
    Write-Host "Vercel CLI encontrado: $vercelCheck" -ForegroundColor Green
}
catch {
    Write-Host "Instalando Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "Verificando dependencias locales..." -ForegroundColor Yellow
npm install --if-needed

Write-Host ""
Write-Host "Compilando la aplicación..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "El build falló. Verifica los errores arriba." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Build completado exitosamente" -ForegroundColor Green
Write-Host ""
Write-Host "Iniciando despliegue en Vercel..." -ForegroundColor Yellow
Write-Host ""

vercel --prod

Write-Host ""
Write-Host "Despliegue completado!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Accede a https://vercel.com/dashboard para ver tu proyecto" -ForegroundColor White
Write-Host "2. Configura el dominio personalizado si lo deseas" -ForegroundColor White
Write-Host "3. Los futuros cambios se desplegarán automáticamente con 'git push'" -ForegroundColor White
