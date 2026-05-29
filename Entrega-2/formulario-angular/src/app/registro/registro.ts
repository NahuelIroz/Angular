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

  formulario!: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

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

      mensaje: [' ']
    });
  }

  enviarFormulario() {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Datos enviados');
    console.log(this.formulario.value);

    this.enviado = true;

    this.formulario.reset();

    setTimeout(() => {
      this.enviado = false;
    }, 3000);
  }
}