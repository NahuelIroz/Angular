# Resumen de Configuración para Despliegue

## ✅ Archivos Preparados

1. **vercel.json** - Configuración de Vercel
   - Build command: `ng build`
   - Output directory: `dist/tpFinal/browser`
   - Runtime: Node.js 20.x
   - SSR habilitado automáticamente

2. **DEPLOYMENT_GUIDE.md** - Guía completa de despliegue

3. **deploy-vercel.sh** - Script bash para Linux/Mac

4. **deploy-vercel.ps1** - Script PowerShell para Windows

## 🚀 Inicio Rápido

### Opción 1: Despliegue Manual (Recomendado para primera vez)

```powershell
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Autenticar
vercel login

# 3. Desplegar (desde directorio del proyecto)
vercel

# 4. Despliegue a producción
vercel --prod
```

### Opción 2: Usar Scripts Preparados

**Windows (PowerShell):**
```powershell
.\deploy-vercel.ps1
```

**Linux/Mac:**
```bash
chmod +x deploy-vercel.sh
./deploy-vercel.sh
```

### Opción 3: Despliegue Automático (Recomendado después)

1. Sube a GitHub
2. En Vercel Dashboard: Import Git Repository
3. Cada `git push` se despliega automáticamente

## 📊 Especificaciones del Proyecto

- **Framework**: Angular 21 con SSR
- **Build Size**: ~266KB (browser) + ~817KB (server)
- **Rutas Precompiladas**: 9 rutas estáticas
- **Lazy Loading**: Productos, Usuarios, Home, Detalles
- **Estado**: ✅ Build exitoso

## 🔍 Validación Local

```bash
npm run build        # Compilar
npm start            # Servidor desarrollo
npm run build        # Build producción
```

## 📝 Checklist Antes de Desplegar

- [ ] Código en GitHub
- [ ] Todas las dependencias en package.json
- [ ] Build local exitoso (`npm run build`)
- [ ] Sin errores críticos en la consola
- [ ] Variables de entorno documentadas (si existen)
- [ ] URLs de APIs configuradas correctamente

## 🌐 Después del Despliegue

1. **Tu aplicación está en**: `https://[tu-proyecto].vercel.app`
2. **Dashboard**: https://vercel.com/dashboard
3. **Logs**: `vercel logs` o en Dashboard → Deployments
4. **Dominio personalizado**: Project Settings → Domains

## 📞 Soporte

- Documentación Vercel: https://vercel.com/docs
- Angular SSR: https://angular.io/guide/universal
- Vercel CLI: https://vercel.com/cli

---
**Estado**: Proyecto listo para despliegue ✅
