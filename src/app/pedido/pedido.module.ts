import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { CuPedidoComponent } from './cu-pedido/cu-pedido.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes=[
  {
    path: '',
    component: ListarPedidoComponent
  }]

@NgModule({
  declarations: [
    ListarPedidoComponent,
    CuPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PedidoModule { }
