# 🚀 Despliegue Vercel - Guía Rápida Corregida

## ✅ Cambios Realizados

He corregido la configuración para que funcione correctamente con Angular SSR en Vercel:

1. **`vercel.json`** - Ahora correctamente configurado
2. **`api/angular.mjs`** - Punto de entrada correcto para SSR
3. **Build** - Compilado exitosamente

## 🔑 Paso 1: Autenticar en Vercel (Única vez)

```powershell
vercel login
```

- Se abrirá el navegador para que inicies sesión
- O puedes ingresar tu email/contraseña en la terminal
- Sigue las instrucciones en pantalla

## 📤 Paso 2: Desplegar a Producción

```powershell
cd c:\Users\niroz\Documents\Angular\Entrega-final\tpFinal
vercel --prod
```

Se te pedirá:
- **Set up and deploy...?** → `y` (yes)
- **Which scope?** → Selecciona tu usuario/equipo
- **Link to existing project?** → `n` (no, es la primera vez)
- **Project name** → `tpfinal` (o el que prefieras)
- **Directory** → `.` (punto, es el directorio actual)

## ✨ Resultado

Después de unos segundos, recibirás:
```
✅ Production: https://[tu-proyecto].vercel.app
```

## 🔍 Verificación

```powershell
# Ver estado del proyecto
vercel status

# Ver logs
vercel logs

# Listar proyectos
vercel list
```

## 📱 Después del Despliegue

Tu aplicación estará en: **https://[tu-proyecto].vercel.app**

Próximas deploys son automáticas si conectas GitHub:
1. Ve a https://vercel.com/dashboard
2. Importa tu repositorio de GitHub
3. Cada `git push` se despliega automáticamente

---
**¿Listo? Ejecuta: `vercel login` seguido de `vercel --prod`**
