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

  camposTocadosProducto: Record<keyof typeof this.erroresProducto, boolean> = {
    nombre: false,
    categoria: false,
    precio: false,
    stock: false
  };

  productoForm: Omit<Producto, 'id'> = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0,
    activo: true
  };

  productoEditando: Producto | null = null;
  mensajeEstado = '';
  erroresProducto = {
    nombre: '',
    categoria: '',
    precio: '',
    stock: ''
  };

  get esFormularioProductoValido(): boolean {
    const nombre = this.productoForm.nombre.trim();
    const categoria = this.productoForm.categoria.trim();
    const precio = Number(this.productoForm.precio);
    const stock = Number(this.productoForm.stock);

    return (
      nombre.length >= 2 &&
      categoria.length >= 2 &&
      precio > 0 &&
      Number.isFinite(precio) &&
      stock >= 0 &&
      Number.isInteger(stock)
    );
  }

  guardarProducto(): void {
    this.camposTocadosProducto = { nombre: true, categoria: true, precio: true, stock: true };
    this.erroresProducto = this.validarProducto();

    if (this.erroresProducto.nombre || this.erroresProducto.categoria || this.erroresProducto.precio || this.erroresProducto.stock) {
      this.mensajeEstado = 'Revisa los campos marcados.';
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
    this.erroresProducto = { nombre: '', categoria: '', precio: '', stock: '' };
    this.camposTocadosProducto = { nombre: false, categoria: false, precio: false, stock: false };
  }

  eliminarProducto(id: number): void {
    this.productosService.eliminarProducto(id);
    this.mensajeEstado = '🗑️ Producto eliminado con éxito.';
  }

  marcarCampoProducto(campo: keyof typeof this.erroresProducto): void {
    this.camposTocadosProducto[campo] = true;
    this.erroresProducto = this.validarProducto();
  }

  mostrarErrorProducto(campo: keyof typeof this.erroresProducto): boolean {
    return this.camposTocadosProducto[campo] && Boolean(this.erroresProducto[campo]);
  }

  private validarProducto(): { nombre: string; categoria: string; precio: string; stock: string } {
    const errores = {
      nombre: '',
      categoria: '',
      precio: '',
      stock: ''
    };

    const nombre = this.productoForm.nombre.trim();
    const categoria = this.productoForm.categoria.trim();
    const precio = Number(this.productoForm.precio);
    const stock = Number(this.productoForm.stock);

    if (!nombre) {
      errores.nombre = 'El nombre es obligatorio.';
    } else if (nombre.length < 2) {
      errores.nombre = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!categoria) {
      errores.categoria = 'La categoría es obligatoria.';
    } else if (categoria.length < 2) {
      errores.categoria = 'La categoría debe tener al menos 2 caracteres.';
    }

    if (!Number.isFinite(precio) || precio <= 0) {
      errores.precio = 'El precio no puede ser menor o igual a cero.';
    }

    if (!Number.isInteger(stock) || stock < 0) {
      errores.stock = 'El stock debe ser un número entero mayor o igual a cero.';
    }

    return errores;
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
    this.erroresProducto = { nombre: '', categoria: '', precio: '', stock: '' };
    this.camposTocadosProducto = { nombre: false, categoria: false, precio: false, stock: false };
  }
}
