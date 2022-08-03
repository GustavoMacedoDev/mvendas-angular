import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { PessoaJuridicaDto } from '../models/cadastros/PessoaJuridica.dto';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  private readonly PATH: string = 'pessoajuridica'

  constructor(public httpClient: HttpClient) { }

  listaPessoaJuridica(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastraPessoaJuridica(pessoajuridica: PessoaJuridicaDto): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, pessoajuridica);
  }
}
