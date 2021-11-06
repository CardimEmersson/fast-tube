import { CategoryDTO } from "./categoryDto";

export interface userDto {
  id: number;
  nome: string;
  email: string;
  foto: string;
  categorias: CategoryDTO[];
}
