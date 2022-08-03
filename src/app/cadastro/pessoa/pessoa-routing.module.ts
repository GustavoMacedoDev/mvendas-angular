import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraPessoaJuridicaComponent } from "./components/cadastra-pessoa-juridica/cadastra-pessoa-juridica.component";
import { ListaPessoaJuridicaComponent } from "./components/lista-pessoa-juridica/lista-pessoa-juridica.component";
import { PessoaComponent } from "./components/pessoa.component";

export const routes :Routes = [
    { 
      path: 'lista-pj',
      component: PessoaComponent,
      children: [
        {
          path: '',
          component: ListaPessoaJuridicaComponent
        }
      ]
    },
    {
      path: 'cadastra-pj',
      component: CadastraPessoaJuridicaComponent
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
  export class PessoaRoutingModule {
  }