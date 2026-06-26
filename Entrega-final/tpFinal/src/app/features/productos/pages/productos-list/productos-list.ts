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
  mensajeEstado = '';

  guardarProducto(): void {
    if (!this.productoForm.nombre.trim() || !this.productoForm.categoria.trim()) {
      this.mensajeEstado = 'Completa nombre y categoría.';
      return;
    }

    if (this.productoEditando) {
      this.productosService.actualizarProducto(this.productoEditando.id, this.productoForm);
      this.mensajeEstado = '✅ Producto actualizado con éxito.';
    } else {
      this.productosService.agregarProducto(this.productoForm);
      this.mensajeEstado = '✅ Producto creado con éxito.';
    }

    this.resetForm();
  }

  editarProducto(producto: Producto): void {
    this.productoEditando = producto;
    this.productoForm = { ...producto };
  }

  eliminarProducto(id: number): void {
    this.productosService.eliminarProducto(id);
    this.mensajeEstado = '🗑️ Producto eliminado con éxito.';
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
