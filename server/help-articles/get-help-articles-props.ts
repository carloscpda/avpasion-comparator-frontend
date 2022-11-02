import { HelpArticlesSection } from "../../models/help-articles-section";

export const getHelpArticlesProps = async () => {
  const data: HelpArticlesSection = await fetch(
    "http://localhost:3000/api/help-articles"
  ).then((res) => res.json());

  return data;
};

export default getHelpArticlesProps;
