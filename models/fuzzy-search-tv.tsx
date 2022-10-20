import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
import buildPicture from "../helpers/build-picture";
import placeholderPic from "../public/tv-placeholder.png";

export type FuzzySearch = Awaited<ReturnType<typeof getFuzzySearch>>[number];

export const getFrontalPicture = (tv: FuzzySearch) => {
  const pic = tv.pictures?.find((pic) =>
    pic?.alternativeText?.includes("frontal")
  );

  return pic?.url ? buildPicture(pic.url) : null;
};

export const getPicture = (tv: FuzzySearch) => {
  const frontal = getFrontalPicture(tv);
  if (frontal) {
    return frontal;
  }

  if (tv.pictures?.[0]?.url) {
    return buildPicture(tv.pictures?.[0]?.url);
  }

  return placeholderPic as unknown as string;
};
