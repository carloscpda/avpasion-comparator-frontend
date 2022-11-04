import { SearchTvFragment } from "../gql/graphql";
import Picture, { buildPicture } from "./picture";

export type SearchTV = SearchTvFragment & { id: string };

export const getBrand = (tv: SearchTV) => {
  return tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes
    ?.name;
};

export const getModel = (tv: SearchTV) => {
  return tv.general?.brand?.model;
};

export const getSerie = (tv: SearchTV) => {
  return tv.general?.brand?.serie?.data?.attributes?.name;
};

export const getFullName = (tv: SearchTV) => {
  return `${getBrand(tv)} ${getModel(tv)}`;
};

export const getReleaseDate = (tv: SearchTV) => {
  return tv.general?.releaseDate;
};

export const getImageTechnology = (tv: SearchTV) => {
  return tv.image?.technology?.image?.data?.attributes?.name;
};

export const getPictures = (tv: SearchTV) => {
  return tv.design?.pictures?.data.map((tv) => tv.attributes);
};

export const getResolution = (tv: SearchTV) => {
  let resolution:
    | { resolution: string; alternativeName: string; icon: string }
    | undefined;
  if (tv.image?.resolution?.data?.attributes?.resolution) {
    resolution = {
      resolution: tv.image.resolution.data.attributes.resolution,
      alternativeName: tv.image?.resolution?.data?.attributes?.alternativeName,
      icon: buildPicture(
        tv.image?.resolution?.data?.attributes?.icon?.data?.attributes?.url ||
          ""
      ),
    };
  }

  return resolution;
};

export const getScreenSize = (tv: SearchTV) => {
  return tv.general?.screenSize;
};

export const getPicture = (tv: SearchTV) => {
  const pictures = getPictures(tv);
  return Picture.getPicture((pictures as Picture[]) || []);
};

export const getSecundaryPictures = (tv: SearchTV) => {
  const pictures = getPictures(tv);
  return Picture.getSecondaryPictures((pictures as Picture[]) || []);
};
