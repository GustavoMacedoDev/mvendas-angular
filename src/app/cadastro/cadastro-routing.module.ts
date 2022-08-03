import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPessoaJuridicaComponent } from "./pessoa/components/lista-pessoa-juridica/lista-pessoa-juridica.component";

export const routes :Routes = [
    { 
      path: 'lista-pj',
      component: ListaPessoaJuridicaComponent
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
  export class CadastroRoutingModule {
  }