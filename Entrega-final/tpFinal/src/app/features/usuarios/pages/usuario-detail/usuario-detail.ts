import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.services';

@Component({
  selector: 'app-usuario-detail',
  imports: [RouterLink],
  templateUrl: './usuario-detail.html',
  styleUrl: './usuario-detail.css',
})
export class UsuarioDetail {
  private route = inject(ActivatedRoute);
  private usuariosService = inject(UsuariosService);

  usuario = this.usuariosService.usuarios().find(
    (u) => u.id === Number(this.route.snapshot.paramMap.get('id'))
  );
}
