import { HistoricoPrecoDto } from "./HistoricoPreco.dto";
import { ListaCategorias } from "./ListaCategorias.dtos";

export interface DetalhaProdutoDto {
    nomeProduto: string;
    valorAtual: number;
    historicoPreco: HistoricoPrecoDto[];
    categorias: ListaCategorias[];
}