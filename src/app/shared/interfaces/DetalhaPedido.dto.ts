import { ItemPedido } from "./ItemPedido.dto";

export interface DetalhaPedido {
    dataPedido: string;
    idPedido: string;
    itens: ItemPedido[];
}