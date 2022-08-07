import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhaProdutoDto } from 'src/app/shared/interfaces/DetalhaProduto.dto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-detalha-produto',
  templateUrl: './detalha-produto.component.html',
  styleUrls: ['./detalha-produto.component.css']
})
export class DetalhaProdutoComponent implements OnInit {

  produto: DetalhaProdutoDto;

  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoService.buscaProdutoPorId(this.route.snapshot.params['idProduto']).subscribe(res => this.produto = res);
  }

}
