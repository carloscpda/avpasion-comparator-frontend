import { HelpArticleDto } from "../help-articles/help-article.dto";

export type HelpArticleSectionDto = {
  title: string;
  articles: HelpArticleDto[];
};
