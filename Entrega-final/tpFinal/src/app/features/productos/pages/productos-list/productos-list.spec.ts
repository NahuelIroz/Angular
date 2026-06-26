import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosList } from './productos-list';

describe('ProductosList', () => {
  let component: ProductosList;
  let fixture: ComponentFixture<ProductosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar un mensaje claro cuando falta el nombre del producto', () => {
    component.productoForm = { nombre: '', categoria: 'Audio', precio: 10, stock: 2, activo: true };

    component.marcarCampoProducto('nombre');

    expect(component.erroresProducto.nombre).toContain('nombre');
    expect(component.mostrarErrorProducto('nombre')).toBeTrue();
  });
});
