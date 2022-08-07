import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhaPedidoComponent } from './components/detalha-pedido/detalha-pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetalhaPedidoComponent,
    ListaPedidosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PedidoModule { }
