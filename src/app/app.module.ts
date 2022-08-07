import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { ConteudoComponent } from './home/conteudo/conteudo.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CadastroRoutingModule } from './cadastro/cadastro-routing.module';
import { PessoaModule } from './cadastro/pessoa/pessoa.module';
import { PessoaRoutingModule } from './cadastro/pessoa/pessoa-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CNPJPipe } from './shared/pipes/cnpj.pipe';
import { SharedModule } from './shared/shared.module';
import { ListaProdutosComponent } from './produtos/produto/components/lista-produtos/lista-produtos.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosRoutingModule } from './produtos/produtos-routing.module';
import { PedidoModule } from './pedidos/pedido/pedido.module';
import { PedidosRoutingModule } from './pedidos/pedidos-routing.module';
import { CategoriaModule } from './produtos/categoria/categoria.module';
import { CategoriaRoutingModule } from './produtos/categoria/categoria-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HomeModule,
    HomeRoutingModule,
    CadastroModule,
    CadastroRoutingModule,
    PessoaModule,
    PessoaRoutingModule,
    ProdutosModule,
    ProdutosRoutingModule,
    PedidoModule,
    PedidosRoutingModule,
    CategoriaModule,
    CategoriaRoutingModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
