import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConteudoComponent } from "./conteudo/conteudo.component";

export const routes :Routes = [
    { 
      path: 'home',
      component: ConteudoComponent
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
  export class HomeRoutingModule {
  }