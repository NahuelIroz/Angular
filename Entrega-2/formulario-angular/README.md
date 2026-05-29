# Formulario de Registro - Angular

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un formulario interactivo utilizando Angular, aplicando formularios reactivos y directivas integradas.

El formulario permite registrar datos de un usuario mediante los siguientes campos:

- **Nombre** (obligatorio, mínimo 3 caracteres).
- **Email** (obligatorio, formato válido).
- **Mensaje** (opcional).

Además, se implementaron validaciones dinámicas, mensajes de error, deshabilitación del botón de envío mientras el formulario sea inválido y reinicio automático del formulario luego del envío exitoso.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Formularios Reactivos (Reactive Forms)

---

## Instrucciones de instalación y ejecución

### 1. Clonar el repositorio

Ejecutar el siguiente comando en la terminal:

```bash
git clone https://github.com/USUARIO/NOMBRE-REPOSITORIO.git
```

Luego ingresar al proyecto:

```bash
cd NOMBRE-REPOSITORIO
```

---

### 2. Instalar dependencias

Ejecutar:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias del proyecto.

---

### 3. Ejecutar el proyecto

Para iniciar el servidor de desarrollo ejecutar:

```bash
ng serve
```

Luego abrir el navegador en:

```txt
http://localhost:4200
```

---

## Funcionalidades implementadas

✔ Creación del componente `registro`.

✔ Implementación de formulario reactivo con `FormBuilder`.

✔ Validaciones:
- Nombre obligatorio.
- Nombre mínimo de 3 caracteres.
- Email obligatorio.
- Validación de formato de email.
- Mensaje opcional.

✔ Uso de directivas Angular:
- `*ngIf` para mostrar mensajes de error.
- `[disabled]` para bloquear el botón si el formulario es inválido.

✔ Envío de datos a consola.

✔ Reinicio del formulario después del envío.

---

## Ejemplo de ejecución en consola

Cuando el formulario se completa correctamente y se presiona el botón **Enviar**, se muestran los datos ingresados en la consola del navegador.

Ejemplo:

```json
{
  "nombre": "Nahuel",
  "email": "nahuel@gmail.com",
  "mensaje": "Hola, este es un mensaje de prueba"
}
```

Para visualizar la consola:

1. Abrir la aplicación en el navegador.
2. Presionar `F12`.
3. Ir a la pestaña **Console**.
4. Enviar el formulario.

---

## Autor

**Nombre del estudiante:** Nahuel Iróz.  
**Curso:** Angular Básico - Módulo 1  
**Unidad:** Unidad 2 - Directivas y Formularios

---

## Bibliografía y fuentes consultadas

### Documentación oficial

Angular. (s.f.). *Reactive Forms*.  
https://angular.dev/guide/forms/reactive-forms

Angular. (s.f.). *Built-in Directives*.  
https://angular.dev/guide/directives

Angular. (s.f.). *Forms in Angular*.  
https://angular.dev/guide/forms

### Bibliografía

Freeman, A. (2020). *Pro Angular 9* (6ª ed.). Apress.

### Créditos de imágenes

No se utilizaron imágenes externas en el proyecto.
