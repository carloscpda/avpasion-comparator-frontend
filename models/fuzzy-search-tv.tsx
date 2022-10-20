import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
import Picture from "./picture";

export type FuzzySearch = Awaited<ReturnType<typeof getFuzzySearch>>[number];

export const getPicture = (tv: FuzzySearch) => {
  return Picture.getPicture((tv.pictures as Picture[]) || []);
};
