import getHelpArticles from "../../graphql/get-help-articles";
import hitOrFetch from "../shared/infra/redis-helper";
import { HelpArticleSectionDto } from "./help-articles-section.dto";
import HelpArticlesSectionsMapper from "./help-articles-sections.mapper";

export type GetAllHelpArticlesSections = Promise<{
  section1: HelpArticleSectionDto | null;
  section2: HelpArticleSectionDto | null;
  section3: HelpArticleSectionDto | null;
}>;

export const getAllHelpArticlesSections: () => GetAllHelpArticlesSections =
  () => {
    return hitOrFetch(
      "next::help-articles-sections",
      async () => {
        const raw = await getHelpArticles();
        return {
          section1: HelpArticlesSectionsMapper.toDto(
            raw.helpArticlesSection?.data?.attributes?.section1
          ),
          section2: HelpArticlesSectionsMapper.toDto(
            raw.helpArticlesSection?.data?.attributes?.section2
          ),
          section3: HelpArticlesSectionsMapper.toDto(
            raw.helpArticlesSection?.data?.attributes?.section3
          ),
        };
      },
      86400
    );
  };
