import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraProdutoComponent } from "./produto/components/cadastra-produto/cadastra-produto.component";
import { DetalhaProdutoComponent } from "./produto/components/detalha-produto/detalha-produto.component";
import { ListaProdutosComponent } from "./produto/components/lista-produtos/lista-produtos.component";

export const routes :Routes = [
    { 
      path: 'lista-produtos',
      component: ListaProdutosComponent
    }, 
    {
      path: 'detalha-produto/:idProduto',
      component: DetalhaProdutoComponent
    },
    {
      path: 'cadastra-produto',
      component: CadastraProdutoComponent
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
  export class ProdutosRoutingModule {
  }