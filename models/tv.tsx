import { CoreTvFragment } from "../gql/graphql";
import Picture from "./picture";

export type TV = CoreTvFragment;

export const getBrand = (tv: TV) => {
  return tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes
    ?.name;
};

export const getModel = (tv: TV) => {
  return tv.general?.brand?.model;
};

export const getSerie = (tv: TV) => {
  return tv.general?.brand?.serie?.data?.attributes?.name;
};

export const getFullName = (tv: TV) => {
  return `${getBrand(tv)} ${getModel(tv)}`;
};

export const getReleaseDate = (tv: TV) => {
  return tv.general?.releaseDate;
};

export const getImageTechnology = (tv: TV) => {
  return tv.image?.technology?.image?.data?.attributes?.name;
};

export const getPictures = (tv: TV) => {
  return tv.design?.pictures?.data.map((tv) => tv.attributes);
};

export const getResolution = (tv: TV) => {
  let resolution: { resolution: string; alternativeName?: string } | undefined;
  if (tv.image?.resolution?.data?.attributes?.resolution) {
    resolution = {
      resolution: tv.image.resolution.data.attributes.resolution,
    };
    if (tv.image?.resolution?.data?.attributes?.alternativeName) {
      resolution.alternativeName =
        tv.image?.resolution?.data?.attributes?.alternativeName;
    }
  }

  return resolution;
};

export const getScreenSize = (tv: TV) => {
  return tv.general?.screenSize;
};

export const getPicture = (tv: TV) => {
  const pictures = getPictures(tv);
  return Picture.getPicture((pictures as Picture[]) || []);
};

export const getPictureDefinition = (tv: TV) => {
  const pictures = getPictures(tv);
  return Picture.getPictureDefinition((pictures as Picture[]) || []);
};

export const getSecundaryPictures = (tv: TV) => {
  const pictures = getPictures(tv);
  return Picture.getSecondaryPictures((pictures as Picture[]) || []);
};
