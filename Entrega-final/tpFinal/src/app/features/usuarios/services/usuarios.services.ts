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

  agregarUsuario(usuario: Omit<Usuario, 'id'>): void {
    const nuevoUsuario: Usuario = {
      id: Date.now(),
      ...usuario
    };

    this.usuarios.update((actual) => [nuevoUsuario, ...actual]);
  }

  eliminarUsuario(id: number): void {
    this.usuarios.update((actual) => actual.filter((usuario) => usuario.id !== id));
  }

  cambiarEstadoUsuario(id: number): void {
    this.usuarios.update((actual) =>
      actual.map((usuario) =>
        usuario.id === id ? { ...usuario, activo: !usuario.activo } : usuario
      )
    );
  }
}