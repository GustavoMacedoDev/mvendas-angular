import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalhaPedidoComponent } from "./pedido/components/detalha-pedido/detalha-pedido.component";
import { ListaPedidosComponent } from "./pedido/components/lista-pedidos/lista-pedidos.component";

export const routes :Routes = [
    {
      path: 'lista-pedidos',
      component: ListaPedidosComponent
    },
    {
      path: 'detalha-pedido/:idPedido',
      component: DetalhaPedidoComponent

    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class PedidosRoutingModule {
  }