import { Component, signal } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  producto: string | undefined;
  constructor(private route: ActivatedRoute){
    this.producto = this.route.snapshot.params["producto"];
    console.log(this.producto);
  }
  }


