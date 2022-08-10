import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { CadastraProduto } from '../interfaces/CadastraProduto.dto';
import { Produto } from '../interfaces/Produto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly PATH: string = 'produtos/'
  private readonly PATHBUSCAPORID: string = 'produtos/produto/'

  constructor(public httpClient: HttpClient) { }

  listaProdutos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  buscaProdutoPorId(idProduto: number): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCAPORID + idProduto);
  }

  cadastraProduto(produto: CadastraProduto): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, produto);
  }

  alterarProduto(idProduto: number, produto: Produto): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idProduto, produto);
  }

}
