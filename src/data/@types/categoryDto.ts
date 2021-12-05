import { VideoDTO } from "./videoDto";

export interface CategoryDTO {
  _id: string;
  title: string;
  color: string;
  videos: VideoDTO[];
  createdAt: Date;
  updateAt: Date;
}
