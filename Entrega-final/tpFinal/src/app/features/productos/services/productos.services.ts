import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = signal<Producto[]>([
    {
      id: 1,
      nombre: 'Laptop Ultralight',
      categoria: 'Tecnología',
      precio: 1299.99,
      stock: 8,
      activo: true
    },
    {
      id: 2,
      nombre: 'Teclado Mecánico',
      categoria: 'Accesorios',
      precio: 89.5,
      stock: 24,
      activo: true
    },
    {
      id: 3,
      nombre: 'Monitor 27"',
      categoria: 'Pantallas',
      precio: 249.99,
      stock: 12,
      activo: false
    }
  ]);

  agregarProducto(producto: Omit<Producto, 'id'>): void {
    const nuevoProducto: Producto = {
      id: Date.now(),
      ...producto
    };

    this.productos.update((actual) => [nuevoProducto, ...actual]);
  }

  actualizarProducto(id: number, cambios: Partial<Producto>): void {
    this.productos.update((actual) =>
      actual.map((producto) =>
        producto.id === id ? { ...producto, ...cambios } : producto
      )
    );
  }
}
