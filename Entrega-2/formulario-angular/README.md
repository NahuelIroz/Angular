# Formulario de Registro - Angular

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un formulario interactivo utilizando Angular, aplicando **formularios reactivos**, **validaciones** y **directivas estructurales y de atributos**.

El formulario permite registrar datos de un usuario mediante los siguientes campos:

- **Nombre** (obligatorio, mínimo 3 caracteres).
- **Email** (obligatorio, formato válido).
- **Mensaje** (opcional).

La aplicación incorpora validaciones visuales, mensajes dinámicos de error, confirmación de envío exitoso y resaltado de campos inválidos.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms (Formularios Reactivos)

---

## Directivas Angular utilizadas

### `*ngIf`

Se utiliza para mostrar u ocultar elementos según una condición.

En el proyecto se aplica para:

- Mostrar mensajes de error cuando un campo es inválido.
- Mostrar el mensaje **“Formulario enviado correctamente”** cuando el formulario se envía exitosamente.

Ejemplo:

```html
<div *ngIf="enviado">
  <h3>Formulario enviado correctamente</h3>
</div>
```

---

### `*ngFor`

Se utiliza para recorrer listas y mostrar contenido dinámicamente.

En el proyecto se usa para mostrar los mensajes de error de validación de cada campo.

Ejemplo:

```html
<li *ngFor="let error of obtenerErrores('nombre')">
  {{ error }}
</li>
```

Esto permite generar automáticamente una lista de errores.

---

### `[ngClass]`

Se utiliza para aplicar clases CSS dinámicamente.

En el proyecto se implementa para resaltar los campos inválidos en rojo.

Ejemplo:

```html
<input
  type="text"
  formControlName="nombre"

  [ngClass]="{
    'campo-invalido':
    formulario.get('nombre')?.invalid &&
    formulario.get('nombre')?.touched
  }"
/>
```

Clase CSS aplicada:

```css
.campo-invalido {
  border: 2px solid red;
}
```

---

## Funcionalidades implementadas

## Componente `registro`.

## Formulario reactivo utilizando `FormBuilder`.

## Validaciones implementadas:

- Nombre obligatorio.
- Nombre con mínimo de 3 caracteres.
- Email obligatorio.
- Validación de formato de email.
- Mensaje opcional.

## Uso de directivas Angular:

- `*ngIf`
- `*ngFor`
- `[ngClass]`

## Resaltado visual de errores.

## Bloqueo del botón **Enviar** cuando el formulario es inválido.

## Mensaje de confirmación de envío.

## Reinicio automático del formulario.

## Impresión de datos en consola.

---

## Instrucciones de instalación y ejecución

### 1. Clonar el repositorio

Ejecutar en la terminal:

```bash
git clone https://github.com/USUARIO/NOMBRE-REPOSITORIO.git
```

Ingresar al proyecto:

```bash
cd NOMBRE-REPOSITORIO
```

---

### 2. Instalar dependencias

Ejecutar:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias.

---

### 3. Ejecutar la aplicación

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```txt
http://localhost:4200
```

---

## Ejemplo de ejecución en consola

Cuando el formulario se completa correctamente y se presiona el botón **Enviar**, los datos ingresados se muestran en la consola del navegador.

Ejemplo:

```txt
Datos enviados:
{
  nombre: 'Nahuel',
  email: 'nahuel@gmail.com',
  mensaje: 'Hola, este es un mensaje de prueba'
}
```

### Cómo visualizar la consola

1. Ejecutar la aplicación.
2. Abrir el navegador.
3. Presionar:

```txt
F12
```

4. Ir a la pestaña:

```txt
Console
```

5. Completar el formulario y presionar **Enviar**.

---

## Estructura del formulario

### Campo Nombre
- Obligatorio.
- Debe contener al menos 3 caracteres.
- Si es inválido, se muestra un mensaje de error y se resalta en rojo.

### Campo Email
- Obligatorio.
- Debe cumplir formato válido de correo electrónico.
- Si es inválido, se muestra un mensaje de error y se resalta en rojo.

### Campo Mensaje
- Opcional.
- Permite ingresar texto libre.

---

## Autor

**Nombre del estudiante:** Nahuel I.  
**Curso:** Angular Básico  
**Unidad:** Unidad 2 - Formularios Reactivos y Directivas

---

## Bibliografía y fuentes consultadas

### Documentación oficial

Angular. (s.f.). *Reactive Forms*.  
https://angular.dev/guide/forms/reactive-forms

Angular. (s.f.). *Directives*.  
https://angular.dev/guide/directives

Angular. (s.f.). *Template Syntax*.  
https://angular.dev/guide/templates

### Bibliografía

Freeman, A. (2020). *Pro Angular* (6ª ed.). Apress.

### Créditos de imágenes

No se utilizaron imágenes externas en el proyecto.
