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

  camposTocadosUsuario: Record<keyof typeof this.erroresUsuario, boolean> = {
    nombre: false,
    email: false,
    rol: false
  };

  mostrarFormulario = false;
  mensajeExito = false;
  mensajeError = '';
  mensajeEliminacion = '';
  erroresUsuario = {
    nombre: '',
    email: '',
    rol: ''
  };

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
    this.erroresUsuario = { nombre: '', email: '', rol: '' };
    this.camposTocadosUsuario = { nombre: false, email: false, rol: false };
  }

  cancelarFormulario(): void {
    this.mostrarFormulario = false;
    this.resetFormulario();
    this.mensajeError = '';
    this.erroresUsuario = { nombre: '', email: '', rol: '' };
  }

  get esFormularioUsuarioValido(): boolean {
    const nombre = this.nuevoUsuario.nombre.trim();
    const email = this.nuevoUsuario.email.trim();
    const rol = this.nuevoUsuario.rol.trim();
    const emailDuplicado = this.usuarios().some(
      (usuario) => usuario.email.toLowerCase() === email.toLowerCase()
    );

    return (
      nombre.length >= 2 &&
      this.esEmailValido(email) &&
      ['Empleado', 'Administrador', 'Supervisor'].includes(rol) &&
      !emailDuplicado
    );
  }

  guardarUsuario(): void {
    this.camposTocadosUsuario = { nombre: true, email: true, rol: true };
    this.erroresUsuario = this.validarUsuario();

    if (this.erroresUsuario.nombre || this.erroresUsuario.email || this.erroresUsuario.rol) {
      this.mensajeError = 'Revisa los campos marcados.';
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

  cambiarEstadoUsuario(id: number): void {
    this.usuariosService.cambiarEstadoUsuario(id);
    this.mensajeEliminacion = '✅ Cambio de estado realizado con éxito.';
    this.mensajeExito = false;
  }

  marcarCampoUsuario(campo: keyof typeof this.erroresUsuario): void {
    this.camposTocadosUsuario[campo] = true;
    this.erroresUsuario = this.validarUsuario();
  }

  mostrarErrorUsuario(campo: keyof typeof this.erroresUsuario): boolean {
    return this.camposTocadosUsuario[campo] && Boolean(this.erroresUsuario[campo]);
  }

  private validarUsuario(): { nombre: string; email: string; rol: string } {
    const errores = {
      nombre: '',
      email: '',
      rol: ''
    };

    const nombre = this.nuevoUsuario.nombre.trim();
    const email = this.nuevoUsuario.email.trim();
    const rol = this.nuevoUsuario.rol.trim();
    const emailDuplicado = this.usuarios().some(
      (usuario) => usuario.email.toLowerCase() === email.toLowerCase()
    );

    if (!nombre) {
      errores.nombre = 'El nombre es obligatorio.';
    } else if (nombre.length < 2) {
      errores.nombre = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!email) {
      errores.email = 'El email es obligatorio.';
    } else if (!this.esEmailValido(email)) {
      errores.email = 'Ingresa un correo electrónico válido.';
    } else if (emailDuplicado) {
      errores.email = 'Ese correo ya está registrado.';
    }

    if (!['Empleado', 'Administrador', 'Supervisor'].includes(rol)) {
      errores.rol = 'Selecciona un rol válido.';
    }

    return errores;
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
    this.camposTocadosUsuario = { nombre: false, email: false, rol: false };
  }
}
