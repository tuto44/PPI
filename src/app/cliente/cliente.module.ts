import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CuClienteComponent } from './cu-cliente/cu-cliente.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes=[
  {
    path: '',
    component: CuClienteComponent
  }

]

@NgModule({
  declarations: [
    ListarClientesComponent,
    CuClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ClienteModule { }
