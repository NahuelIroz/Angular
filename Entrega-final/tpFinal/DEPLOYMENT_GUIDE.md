# Guía de Despliegue en Vercel

## Prerequisitos
- Cuenta en GitHub (con el repositorio del proyecto)
- Cuenta en Vercel (gratuita en https://vercel.com)
- Node.js y npm instalados

## Paso 1: Instalar Vercel CLI

Ejecuta el siguiente comando en tu terminal:

```bash
npm i -g vercel
```

## Paso 2: Autenticar con Vercel

```bash
vercel login
```

Sigue las instrucciones para conectar tu cuenta de Vercel. Se abrirá una ventana del navegador para autenticar.

## Paso 3: Verificar Configuración

El archivo `vercel.json` ya está configurado en el proyecto. Este archivo especifica:
- Comando de build: `ng build`
- Directorio de salida: `dist/tpFinal/browser`
- Runtime: Node.js 20.x
- Redirecciones para SSR

## Paso 4: Desplegar

Desde la raíz del proyecto (`tpFinal`), ejecuta:

```bash
vercel
```

Vercel te hará varias preguntas:
- **Set up and deploy "..."?** → `Y` (Yes)
- **Which scope do you want to deploy to?** → Selecciona tu cuenta
- **Link to existing project?** → `N` (No, es la primera vez)
- **What's your project's name?** → `tpfinal` (o el nombre que prefieras)
- **In which directory is your code located?** → `.` (punto, directorio actual)

## Paso 5: Despliegue Automático (Recomendado)

Para que los cambios se desplieguen automáticamente cuando hagas push a GitHub:

1. Sube tu proyecto a GitHub si aún no lo has hecho:
   ```bash
   git add .
   git commit -m "Configurar despliegue en Vercel"
   git push origin main
   ```

2. En Vercel Dashboard (https://vercel.com/dashboard):
   - Haz clic en "New Project" → "Import Git Repository"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente Angular
   - Haz clic en "Deploy"

## Paso 6: Variables de Entorno (si es necesario)

Si tu aplicación usa variables de entorno:

1. En Vercel Dashboard, ve a: Project Settings → Environment Variables
2. Agrega tus variables (ej: API_URL, etc.)
3. Haz redeploy

## Paso 7: Validar el Despliegue

Una vez completado:
- Vercel proporcionará una URL: `https://tu-proyecto.vercel.app`
- Accede a esa URL para verificar que la aplicación funciona
- Verifica que todas las rutas naveguen correctamente
- Comprueba en DevTools que no hay errores

## Comandos Útiles

```bash
# Ver estado del despliegue
vercel status

# Mostrar logs del servidor
vercel logs

# Redeploy forzado
vercel --prod

# Ver URL del proyecto
vercel --list
```

## Solución de Problemas

### Error: "Build failed"
- Verifica que `npm run build` funciona localmente
- Revisa los logs en Vercel Dashboard
- Asegúrate que todas las dependencias están en `package.json`

### Errores de CSS en presupuesto
- Los warnings actuales son menores y no afectan el despliegue
- Si es necesario, puedes ajustar los budgets en `angular.json`

### La aplicación no funciona en la URL
- Verifica que las rutas están correctamente configuradas
- Revisa la consola del navegador (F12)
- Comprueba los logs de Vercel: `vercel logs`

## Configuración Adicional (Opcional)

### Dominio personalizado
1. En Vercel Dashboard → Project Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS records según las instrucciones de Vercel

### Variables de Entorno de Build
Si necesitas variables durante el build, agrégalas en Project Settings → Environment Variables

## Siguiente Despliegue
Una vez configurado GitHub + Vercel:
- Simplemente haz `git push`
- Vercel se encargará del build y despliegue automático
- Recibirás notificaciones de cada despliegue

---
**Tu aplicación estará disponible en menos de 1-2 minutos después del despliegue inicial.**
