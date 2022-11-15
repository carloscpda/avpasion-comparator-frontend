import { PictureDto } from "../pictures/picture.dto";

export type HelpArticleDto = {
  title: string;
  picture: PictureDto;
  url: string;
};
