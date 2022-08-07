import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly PATH: string = 'pedidos/'

  constructor(public httpClient: HttpClient) { }

  listaPedidos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  detalhaPedidoPorId(idPedido: number): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idPedido);
  }

}
