import { CommonModule } from '@angular/common';
import { CuProductoComponent } from './cu-producto/cu-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes=[
  {
    path: '',
    component: CuProductoComponent
  },
  {
    path: ':categoria',
    component: ListarProductoComponent
  }]

  @NgModule({
    declarations: [
      ListarProductoComponent,
      CuProductoComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(ROUTES)
    ]
  })
  export class ProductoModule {
  }
  

