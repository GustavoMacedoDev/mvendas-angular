import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhaProdutoComponent } from './components/detalha-produto/detalha-produto.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { RouterModule } from '@angular/router';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DetalhaProdutoComponent,
    ListaProdutosComponent,
    CadastraProdutoComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ProdutoModule { }
