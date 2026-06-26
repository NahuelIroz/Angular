import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.services';

@Component({
  selector: 'app-productos-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.css',
})
export class ProductosList {
  private productosService = inject(ProductosService);
  productos = this.productosService.productos;

  productoForm: Omit<Producto, 'id'> = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0,
    activo: true
  };

  productoEditando: Producto | null = null;

  guardarProducto(): void {
    if (!this.productoForm.nombre.trim()) {
      return;
    }

    if (this.productoEditando) {
      this.productosService.actualizarProducto(this.productoEditando.id, this.productoForm);
    } else {
      this.productosService.agregarProducto(this.productoForm);
    }

    this.resetForm();
  }

  editarProducto(producto: Producto): void {
    this.productoEditando = producto;
    this.productoForm = { ...producto };
  }

  resetForm(): void {
    this.productoEditando = null;
    this.productoForm = {
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0,
      activo: true
    };
  }
}
