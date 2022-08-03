import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly PATH: string = 'produtos'
  private readonly PATHBUSCAPORID: string = 'produtos/produto/'

  constructor(public httpClient: HttpClient) { }

  listaProdutos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  buscaProdutoPorId(idProduto: number): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCAPORID + idProduto);
  }

}
