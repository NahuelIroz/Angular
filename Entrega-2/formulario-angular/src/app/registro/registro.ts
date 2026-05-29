import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {

  formulario: FormGroup;
  enviado: boolean = false;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      mensaje: ['']
    });
  }

  obtenerErrores(campo: string): string[] {

    const control = this.formulario.get(campo);

    if (!control || !control.errors || !control.touched) {
      return [];
    }

    const errores: string[] = [];

    if (control.errors['required']) {
      errores.push(`${campo} es obligatorio`);
    }

    if (control.errors['minlength']) {
      errores.push(`${campo} debe tener al menos 3 caracteres`);
    }

    if (control.errors['email']) {
      errores.push('Ingrese un email válido');
    }

    return errores;
  }

  enviarFormulario(): void {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Datos enviados:', this.formulario.value);

    this.enviado = true;

    this.formulario.reset();

    setTimeout(() => {
      this.enviado = false;
    }, 3000);
  }
}