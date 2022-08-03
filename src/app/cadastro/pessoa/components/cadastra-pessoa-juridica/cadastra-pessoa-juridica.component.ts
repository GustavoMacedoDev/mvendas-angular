import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PessoaJuridica } from 'src/app/shared/interfaces/PessoaJuridica';
import { PessoaJuridicaDto } from 'src/app/shared/models/cadastros/PessoaJuridica.dto';
import { PessoaJuridicaService } from 'src/app/shared/services/pessoa-juridica.service';

@Component({
  selector: 'app-cadastra-pessoa-juridica',
  templateUrl: './cadastra-pessoa-juridica.component.html',
  styleUrls: ['./cadastra-pessoa-juridica.component.css']
})
export class CadastraPessoaJuridicaComponent implements OnInit {

  form!: FormGroup;
  

  constructor(private fb: FormBuilder,
              private pjService: PessoaJuridicaService,
			        private router: Router,
              private snackBar: MatSnackBar
              ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nomeFantasia: ['', [Validators.required]],
      nomeEmpresarial: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      logradouro: this.fb.control('', [Validators.required]),
      numero: this.fb.control('', [Validators.required]),
      cep: this.fb.control('', [Validators.required]),
      bairro: this.fb.control('', [Validators.required]),
      complemento: this.fb.control('', [Validators.required])

    });
  }

  cadastrarPessoaJuridica(){
    if(this.form.invalid){
      return;
    }

    const pessoaJuridica: PessoaJuridica = this.form.value;

    this.pjService.cadastraPessoaJuridica(pessoaJuridica)
      .subscribe(
            {
                next: () => {
                    const msg: string = "Pessoa Cadastrada com suceso!!";
                    this.router.navigate(['/lista-pj']);
                },
                error: (err) => {
                    let msg: string = "Tente novamente em instantes";
                    this.snackBar.open(msg, "Erro", {duration: 5000});
                }
            }
		);

	  return false;
  }

}
