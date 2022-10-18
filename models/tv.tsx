import { GetTvQuery } from "../gql/graphql";
import placeholderPic from "../public/tv-placeholder.png";

export type TV = NonNullable<
  NonNullable<GetTvQuery["tvs"]>["data"][number]["attributes"]
>;

export const getFullName = (tv: TV) => {
  return `${tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes?.name} ${tv.general?.brand?.model}`;
};

export const getPicture = (tv: TV) => {
  const path = tv.design?.pictures?.data[0]?.attributes?.url;
  return path ? `https://cmc.avpasion.com${path}` : placeholderPic;
};
