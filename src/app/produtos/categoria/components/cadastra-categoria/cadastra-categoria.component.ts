import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastraCategoria } from 'src/app/shared/interfaces/CadastraCategoria.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-cadastra-categoria',
  templateUrl: './cadastra-categoria.component.html',
  styleUrls: ['./cadastra-categoria.component.css']
})
export class CadastraCategoriaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
  }

  geraForm() {
    this.form = this.fb.group({
      nomeCategoria: ['', [Validators.required]]
    });
  }

  cadastrarCategoria() {
    if(this.form.invalid) {
      return;
    }

    const categoria: CadastraCategoria = this.form.value;

    this.categoriaService.cadastraCategoria(categoria)
      .subscribe({
        next: () => {
          const msg: string = 'Categoria cadastrada com sucesso';
          this.router.navigate(['/lista-categorias']);
          this.snackBar.open(msg, "Sucesso", {duration: 3000})
        },
        error: (erro) => {
          console.log(erro.error.mensagem);
          let msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration: 3000})
        }
      });

      return false;
  }

}
