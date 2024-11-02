import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  
  constructor(private router: Router, private route : ActivatedRoute) { 
   console.log(this.route.snapshot.params["categoria"])
  }
  
  ircamaras() {
    this.router.navigate(['/producto/camara']); 
    
  }
  irmonitores() {
    this.router.navigate(['/producto/monitores']);  
    
  }
  iralarmas() {
    this.router.navigate(['/producto/alarmas']);  
    
  }

}
