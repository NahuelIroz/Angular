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
  mensajeError = '';
  mensajeEliminacion = '';

  nuevoUsuario: Omit<Usuario, 'id'> = {
    nombre: '',
    email: '',
    rol: 'Empleado',
    activo: true
  };

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.mensajeExito = false;
    this.mensajeError = '';
  }

  cancelarFormulario(): void {
    this.mostrarFormulario = false;
    this.resetFormulario();
    this.mensajeError = '';
  }

  guardarUsuario(): void {
    if (!this.nuevoUsuario.nombre.trim() || !this.nuevoUsuario.email.trim()) {
      this.mensajeError = 'Completa nombre y email.';
      return;
    }

    if (!this.esEmailValido(this.nuevoUsuario.email)) {
      this.mensajeError = 'Ingresa un correo electrónico válido.';
      return;
    }

    this.usuariosService.agregarUsuario(this.nuevoUsuario);
    this.mensajeExito = true;
    this.mensajeEliminacion = '';
    this.mostrarFormulario = false;
    this.resetFormulario();
    this.mensajeError = '';
  }

  eliminarUsuario(id: number): void {
    this.usuariosService.eliminarUsuario(id);
    this.mensajeEliminacion = '✅ El usuario fue eliminado con éxito.';
    this.mensajeExito = false;
  }

  private esEmailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
