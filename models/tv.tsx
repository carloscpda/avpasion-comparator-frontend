import { ScoreWeighting } from "./score-weighting";
import { GetTvQuery } from "../gql/graphql";
import placeholderPic from "../public/tv-placeholder.png";

export type TV = NonNullable<
  NonNullable<GetTvQuery["tvs"]>["data"][number]["attributes"]
>;

export const getFullName = (tv: TV) => {
  return `${tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes?.name} ${tv.general?.brand?.model}`;
};

export const getScore = (tv: TV, scoreWeighting: ScoreWeighting) => {
  return (
    scoreWeighting.image * (tv.image?.score || 0) +
    scoreWeighting.sound * (tv.sound?.score || 0) +
    scoreWeighting.connections * (tv.connections?.score || 0) +
    scoreWeighting.design * (tv.design?.score || 0) +
    scoreWeighting.system * (tv.system?.score || 0)
  );
};

export const getPicture = (tv: TV) => {
  const path = tv.design?.pictures?.data[0]?.attributes?.url;
  return path ? `https://cmc.avpasion.com${path}` : placeholderPic;
};
