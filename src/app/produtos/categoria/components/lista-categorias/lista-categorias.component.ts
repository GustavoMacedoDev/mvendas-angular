import { Component, OnInit } from '@angular/core';
import { ListaCategorias } from 'src/app/shared/interfaces/ListaCategorias.dtos';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: ListaCategorias[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listaCategorias().subscribe(res => this.categorias = res);

  }

}
