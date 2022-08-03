import { TipoEndereco } from "./TipoEndereco";

export interface Endereco {
    logradouro: string;
    numero: string;
    cep: string;
    bairro: string;
    complemento: string;
    tipoEndereco: TipoEndereco;
}