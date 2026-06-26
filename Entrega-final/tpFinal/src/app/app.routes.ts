import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./features/usuarios/pages/usuarios-list/usuarios-list')
        .then(m => m.UsuariosList),
  },
  {
    path: 'usuarios/:id',
    loadComponent: () =>
      import('./features/usuarios/pages/usuario-detail/usuario-detail')
        .then(m => m.UsuarioDetail),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/productos/pages/productos-list/productos-list')
        .then(m => m.ProductosList),
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./features/productos/pages/producto-detail/producto-detail')
        .then(m => m.ProductoDetail),
  },
  {
    path: '**',
    redirectTo: '',
  },
];