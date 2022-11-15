import PicturesMapper from "../pictures/pictures.mapper";
import { HelpArticleDto } from "./help-article.dto";

class HelpArticlesMapper {
  public static toDto(raw: any): HelpArticleDto | null {
    if (!raw.url || !raw.title || !raw.image) {
      return null;
    }

    return {
      url: raw.url,
      title: raw.title,
      picture: PicturesMapper.toDto(raw.image),
    };
  }
}

export default HelpArticlesMapper;
