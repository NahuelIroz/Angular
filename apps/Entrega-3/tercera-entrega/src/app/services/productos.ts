import { Injectable } from '@angular/core';

//Acá creo el servicio

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private productos = [
    {
      id: 1,
      nombre: 'Notebook',
      precio: 1200000,
      fechaAlta: new Date('2025-01-15')
    },
    {
      id: 2,
      nombre: 'Monitor',
      precio: 350000,
      fechaAlta: new Date('2025-02-10')
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 80000,
      fechaAlta: new Date('2025-03-05')
    }
  ];

  getProductos() {
    return this.productos;
  }

  addProducto(producto: any) {
    this.productos.push(producto);
  }

  deleteProducto(id: number) {
    this.productos = this.productos.filter(
      producto => producto.id !== id
    );
  }
}