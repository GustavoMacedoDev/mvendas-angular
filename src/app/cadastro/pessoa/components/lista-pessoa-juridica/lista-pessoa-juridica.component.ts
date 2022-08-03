import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { PessoaJuridica } from 'src/app/shared/interfaces/PessoaJuridica';
import { PessoaJuridicaService } from 'src/app/shared/services/pessoa-juridica.service';

@Component({
  selector: 'app-lista-pessoa-juridica',
  templateUrl: './lista-pessoa-juridica.component.html',
  styleUrls: ['./lista-pessoa-juridica.component.css']
})
export class ListaPessoaJuridicaComponent implements OnInit {

  pessoasJuridicas: PessoaJuridica[] = [];

  constructor(private pessoaService: PessoaJuridicaService) { }

  ngOnInit(): void {
    this.pessoaService.listaPessoaJuridica().subscribe(res => this.pessoasJuridicas = res);
    console.log(this.pessoasJuridicas);
  }


}
