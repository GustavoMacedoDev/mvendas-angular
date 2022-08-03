import { HistoricoPrecoDto } from "./HistoricoPreco.dto";

export interface DetalhaProdutoDto {
    nomeProduto: string;
    valorAtual: number;
    historicoPreco: HistoricoPrecoDto[];
}