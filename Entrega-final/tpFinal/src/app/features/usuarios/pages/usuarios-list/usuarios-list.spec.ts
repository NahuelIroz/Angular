import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosList } from './usuarios-list';

describe('UsuariosList', () => {
  let component: UsuariosList;
  let fixture: ComponentFixture<UsuariosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosList],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe validar el correo con un mensaje claro', () => {
    component.nuevoUsuario = { nombre: 'Ana', email: 'correo-invalido', rol: 'Empleado', activo: true };

    component.marcarCampoUsuario('email');

    expect(component.erroresUsuario.email).toContain('correo');
    expect(component.mostrarErrorUsuario('email')).toBeTrue();
  });
});
