import { Produto } from "./Produto.dto";

export interface ItemPedido {
    desconto: number;
    quantidade: number;
    produto: Produto;
}