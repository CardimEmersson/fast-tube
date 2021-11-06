import { videoDto } from "./videoDto";

export interface CategoryDTO {
  titulo: string;
  cor: string;
  videos: videoDto[];
}
