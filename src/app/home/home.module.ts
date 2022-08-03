import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConteudoComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
