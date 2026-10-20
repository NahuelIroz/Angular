import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Productos } from '../../services/productos';
import { DescuentoPipe } from '../../pipes/descuento-pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [
    CommonModule,
    CurrencyPipe,
    DatePipe,
    DescuentoPipe,
    FormsModule
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: any[] = [];

  nuevoNombre = '';
  nuevoPrecio = 0;

  constructor(private productosService: Productos) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos = this.productosService.getProductos();
  }

  agregarProducto() {

    if (!this.nuevoNombre || this.nuevoPrecio <= 0) {
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre: this.nuevoNombre,
      precio: this.nuevoPrecio,
      fechaAlta: new Date()
    };

    this.productosService.addProducto(nuevoProducto);

    this.cargarProductos();

    this.nuevoNombre = '';
    this.nuevoPrecio = 0;
  }

  eliminarProducto(id: number) {
    this.productosService.deleteProducto(id);
    this.cargarProductos();
  }
}