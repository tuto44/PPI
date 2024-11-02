import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { CuReservaComponent } from './cu-reserva/cu-reserva.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes=[
  {
    path: '',
    component: ListarReservaComponent
  }]

@NgModule({
  declarations: [
    ListarReservaComponent,
    CuReservaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ReservaModule { }
