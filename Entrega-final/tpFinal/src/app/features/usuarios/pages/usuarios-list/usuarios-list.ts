import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.services';

@Component({
  selector: 'app-usuarios-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './usuarios-list.html',
  styleUrl: './usuarios-list.css',
})
export class UsuariosList {
  private usuariosService = inject(UsuariosService);
  usuarios = this.usuariosService.usuarios;

  mostrarFormulario = false;
  mensajeExito = false;

  nuevoUsuario: Omit<Usuario, 'id'> = {
    nombre: '',
    email: '',
    rol: 'Empleado',
    activo: true
  };

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.mensajeExito = false;
  }

  cancelarFormulario(): void {
    this.mostrarFormulario = false;
    this.resetFormulario();
  }

  guardarUsuario(): void {
    if (!this.nuevoUsuario.nombre.trim() || !this.nuevoUsuario.email.trim()) {
      return;
    }

    this.usuariosService.agregarUsuario(this.nuevoUsuario);
    this.mensajeExito = true;
    this.mostrarFormulario = false;
    this.resetFormulario();
  }

  private resetFormulario(): void {
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      rol: 'Empleado',
      activo: true
    };
  }
}
