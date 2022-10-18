import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";

export type FuzzySearch = Awaited<ReturnType<typeof getFuzzySearch>>[number];
