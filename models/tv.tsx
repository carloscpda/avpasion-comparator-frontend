import { GetTvQuery } from "../gql/graphql";
import placeholderPic from "../public/tv-placeholder.png";

export type TV = NonNullable<
  NonNullable<GetTvQuery["tvs"]>["data"][number]["attributes"]
>;

export const getFullName = (tv: TV) => {
  return `${tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes?.name} ${tv.general?.brand?.model}`;
};

export const getPictures = (tv: TV) => {
  return tv.design?.pictures?.data.map((tv) => tv.attributes);
};

const buildPicture = (path: string) => `https://cmc.avpasion.com${path}`;

export const getFrontalPicture = (tv: TV) => {
  const pictures = getPictures(tv);
  const pic = pictures?.find((tv) => tv?.alternativeText?.includes("frontal"));

  return pic?.url ? buildPicture(pic.url) : null;
};

export const getPicture = (tv: TV) => {
  const frontal = getFrontalPicture(tv);
  if (frontal) {
    return frontal;
  }

  const pictures = getPictures(tv);
  if (pictures?.[0]?.url) {
    return buildPicture(pictures?.[0]?.url);
  }

  return placeholderPic as unknown as string;
};
