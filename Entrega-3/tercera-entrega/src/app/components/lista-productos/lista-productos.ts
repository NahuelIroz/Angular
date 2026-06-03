import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: any[] = [];

  constructor(private productosService: Productos) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }

}