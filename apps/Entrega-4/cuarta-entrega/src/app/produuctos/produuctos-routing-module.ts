import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProductosComponent } from './lista-productos/lista-productos';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto';
const routes: Routes = [
{
path: '',
component: ListaProductosComponent
},
{
path: ':id',
component: DetalleProductoComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductosRoutingModule {}