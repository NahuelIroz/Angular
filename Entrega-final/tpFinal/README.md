# TP Final - Angular

Aplicación web desarrollada en Angular 21 con una interfaz moderna, futurista y dinámica para gestionar usuarios y productos.

## Características principales

- Panel principal con diseño premium y métricas visuales.
- Gestión de usuarios con:
  - alta de usuarios,
  - validaciones de formulario,
  - cambio de estado activo/inactivo,
  - eliminación,
  - vista de detalle.
- Gestión de productos con:
  - carga y edición,
  - validaciones,
  - eliminación,
  - vista de detalle.
- Estilos responsivos y experiencia visual moderna.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- Angular Router
- Angular Forms
- SSR / prerendering
- CSS moderno y responsive

## Requisitos previos

- Node.js 18 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

Luego abrir en el navegador:

```text
http://localhost:4200/
```

## Construcción para producción

```bash
npm run build
```

Los archivos generados quedarán en la carpeta `dist/`.

## Estructura del proyecto

```text
src/
  app/
    core/           # componentes compartidos como sidebar
    features/       # módulos de home, usuarios y productos
    styles/         # estilos globales
```

## Funcionalidades destacadas

- Home con métricas, gráficos visuales y diseño premium.
- Catálogo de productos con hover, movimiento y cards dinámicas.
- Formularios con validaciones para evitar datos incompletos o inválidos.
- Cambio de estado de usuarios con mensaje de confirmación.

## Notas

Este proyecto fue pensado como una interfaz de administración moderna, con datos en memoria para mostrar el flujo completo de una app CRUD estilizada.
