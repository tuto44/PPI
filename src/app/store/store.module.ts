import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: CatalogoComponent
  },
  {
    path: ':categoria',
    component: CatalogoComponent
  },
  {
    path: 'carrito/:producto',
    component: CarritoComponent
  }
]

@NgModule({
    declarations: [
      CarritoComponent,
      CatalogoComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(ROUTES)
    ]
  })
  export class StoreModule { }
