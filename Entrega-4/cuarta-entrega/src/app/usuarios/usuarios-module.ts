import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';

@NgModule({
  declarations: [
    ListaUsuarios
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule {}