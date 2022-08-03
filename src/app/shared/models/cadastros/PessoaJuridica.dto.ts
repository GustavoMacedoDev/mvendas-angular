import { Endereco } from "../../interfaces/Endereco";

export class PessoaJuridicaDto {

    constructor(
        dataAbertura: string,
        nomeFantasia: string,
        nomeEmpresarial: string,
        cnpj: string,
        endereco: Endereco
    ) {}
}