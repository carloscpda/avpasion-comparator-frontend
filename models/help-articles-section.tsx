import getHelpArticles from "../graphql/get-help-articles";

export type HelpArticlesSection = Awaited<ReturnType<typeof getHelpArticles>>;
