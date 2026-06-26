import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.services';

@Component({
  selector: 'app-producto-detail',
  imports: [RouterLink],
  templateUrl: './producto-detail.html',
  styleUrl: './producto-detail.css',
})
export class ProductoDetail {
  private route = inject(ActivatedRoute);
  private productosService = inject(ProductosService);

  producto = this.productosService.productos().find(
    (p) => p.id === Number(this.route.snapshot.paramMap.get('id'))
  );
}
