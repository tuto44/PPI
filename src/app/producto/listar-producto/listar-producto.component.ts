import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent {
  categoria = undefined;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.categoria = route.snapshot.params["categoria"];
  }

  verDetalle(producto: string) {
    this.router.navigate(['/store/carrito/' + producto])
  }

}
