import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {

  transform(precio: number, porcentaje: number): number {

    const descuento = precio * porcentaje / 100;

    return precio - descuento;

  }

}