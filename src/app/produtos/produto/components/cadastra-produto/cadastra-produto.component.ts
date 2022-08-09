import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastraProduto } from 'src/app/shared/interfaces/CadastraProduto.dto';
import { ListaCategorias } from 'src/app/shared/interfaces/ListaCategorias.dtos';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastraProdutoComponent implements OnInit {

  produto: CadastraProduto;
  categoriasList: ListaCategorias[];
  form: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.categoriaService.listaCategorias().subscribe(res => this.categoriasList = res);
  }

  geraForm(){
    this.form = this.fb.group({
      nomeProduto: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      categorias: this.fb.control('')
    })
  }
  cadastraProduto() {
    if(this.form.invalid) {
      return ;
    }
    console.log(this.form.value);
    const produto: CadastraProduto = this.form.value;
    
    this.produtoService.cadastraProduto(produto)
      .subscribe({
        next: () => {
          const msg: string = 'Produto Cadastrado com sucesso';
        //  this.router.navigate(['/lista-produtos']);
          this.snackBar.open(msg, "Sucesso", { duration: 3000});
        },
        error: (erro) => {
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", { duration: 3000})
        }
      });

      return false;
  }

}
