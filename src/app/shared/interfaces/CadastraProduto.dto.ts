import { CategoriaId } from './CategoriaId.dto';
export interface CadastraProduto {
    nomeProduto: number;
    valor: number;
    categorias: CategoriaId[];

}