import { Endereco } from "./Endereco";

export interface PessoaJuridica {
    dataAbertura: string;
    nomeFantasia: string;
    nomeEmpresarial: string;
    cnpj: string;
    endereco: Endereco;

}