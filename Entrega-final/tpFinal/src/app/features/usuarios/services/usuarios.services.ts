import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios = signal<Usuario[]>([
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@mail.com',
      rol: 'Administrador',
      activo: true
    },
    {
      id: 2,
      nombre: 'María Gómez',
      email: 'maria@mail.com',
      rol: 'Empleado',
      activo: false
    },
    {
      id: 3,
      nombre: 'Carlos López',
      email: 'carlos@mail.com',
      rol: 'Supervisor',
      activo: true
    }
  ]);

}