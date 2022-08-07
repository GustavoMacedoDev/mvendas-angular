import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastraCategoria } from 'src/app/shared/interfaces/CadastraCategoria.dto';
import { EditaCategoria } from 'src/app/shared/interfaces/EditaCategoria.dto';
import { ListaCategorias } from 'src/app/shared/interfaces/ListaCategorias.dtos';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-edita-categoria',
  templateUrl: './edita-categoria.component.html',
  styleUrls: ['./edita-categoria.component.css']
})
export class EditaCategoriaComponent implements OnInit {

  categoria!: ListaCategorias;
  form: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
    this.categoriaService.listaCategoriaPeloId(this.route.snapshot.params['idCategoria']).subscribe(
      res => this.categoria = res
    );

  }

  geraForm() {
    this.form = this.fb.group({
      nomeCategoria:['', [Validators.required]]
    });
  }

  alterarCategoria() {
    if(this.form.invalid) {
      return;
    }

    const categoria: EditaCategoria = this.form.value;
    const idCategoria = this.categoria.idCategoria;

    this.categoriaService.alteraCategoria(idCategoria, categoria)
    .subscribe({
      next: () => {
        const msg: string = 'Categoria alterada com sucesso';
        this.router.navigate(['/lista-categorias']);
        this.snackBar.open(msg, "Sucesso", {duration: 3000})
      },
      error: (erro) => {
        let msg: string = erro.error.mensagem;
        this.snackBar.open(msg, "Erro", {duration: 3000})
      }
    });
  }
}
