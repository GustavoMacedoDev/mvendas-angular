import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhaProdutoComponent } from './components/detalha-produto/detalha-produto.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetalhaProdutoComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProdutoModule { }
