import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ListaProdutosDto } from 'src/app/shared/interfaces/ListaProdutos.dto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: ListaProdutosDto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listaProdutos().subscribe(res => this.produtos = res);
  }

}
