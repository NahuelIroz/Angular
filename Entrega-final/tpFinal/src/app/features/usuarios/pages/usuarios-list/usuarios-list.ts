import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.services';

@Component({
  selector: 'app-usuarios-list',
  imports: [RouterLink],
  templateUrl: './usuarios-list.html',
  styleUrl: './usuarios-list.css',
})
export class UsuariosList {
  private usuariosService = inject(UsuariosService);
  usuarios = this.usuariosService.usuarios;
}
