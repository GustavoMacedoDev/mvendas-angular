import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraCategoriaComponent } from "./components/cadastra-categoria/cadastra-categoria.component";
import { EditaCategoriaComponent } from "./components/edita-categoria/edita-categoria.component";
import { ListaCategoriasComponent } from "./components/lista-categorias/lista-categorias.component";

export const routes :Routes = [
   {
    path: 'lista-categorias',
    component: ListaCategoriasComponent
   },
   {
    path: 'cadastra-categoria',
    component: CadastraCategoriaComponent
   },
   {
    path: 'edita-categoria/:idCategoria',
    component: EditaCategoriaComponent
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
  export class CategoriaRoutingModule {
  }