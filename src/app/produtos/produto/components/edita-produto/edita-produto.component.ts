import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/interfaces/Produto.dto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {

  produto: Produto;
  form: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
    this.produtoService.buscaProdutoPorId(this.route.snapshot.params['idProduto']).subscribe(
      res => this.produto = res
    );
  }

  geraForm() {
    this.form = this.fb.group({
      nomeProduto:['', [Validators.required]],
      valor:['', Validators.required]
    });
  }

  alterarProduto() {
    if(this.form.invalid) {
      return;
    }

    const produto: Produto = this.form.value;
    const idProduto = this.produto.idProduto;

    this.produtoService.alterarProduto(idProduto, produto)
      .subscribe({
        next: () => {
            let msg: string = "Produto alterado com sucesso";
            this.router.navigate(['/lista-produtos']);
            this.snackBar.open(msg, "Suceso", {duration: 3000});
        },
        error: (erro) => {
            let msg: string = erro.error.mensagem;
            this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });

      return false;
  }
}
