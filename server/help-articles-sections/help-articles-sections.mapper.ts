import HelpArticlesMapper from "../help-articles/help-articles.mapper";
import { HelpArticleSectionDto } from "./help-articles-section.dto";

class HelpArticlesSectionsMapper {
  public static toDto(raw: any): HelpArticleSectionDto | null {
    if (!raw.articles) {
      return null;
    }

    return {
      title: raw.title,
      articles: raw.articles.data
        .map(({ attributes }: any) => HelpArticlesMapper.toDto(attributes))
        .filter(Boolean),
    };
  }
}

export default HelpArticlesSectionsMapper;
