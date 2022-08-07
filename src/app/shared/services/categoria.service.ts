import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { CadastraCategoria } from '../interfaces/CadastraCategoria.dto';
import { EditaCategoria } from '../interfaces/EditaCategoria.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly PATH: string = 'categorias/'
  private readonly PATHBUSCACATEGORIAPELOID: string = 'categorias/id/'

  constructor(public httpClient: HttpClient) { }

  listaCategorias(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastraCategoria(categoria: CadastraCategoria): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH , categoria);
  }

  alteraCategoria(idCategoria: number, categoria: EditaCategoria): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idCategoria, categoria);
  }

  listaCategoriaPeloId(idCategoria: number): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCACATEGORIAPELOID + idCategoria);
  }


}
