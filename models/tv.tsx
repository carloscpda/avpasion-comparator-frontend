import { GetTvQuery } from "../gql/graphql";
import buildPicture from "../helpers/build-picture";
import placeholderPic from "../public/tv-placeholder.png";

export type TV = NonNullable<
  NonNullable<GetTvQuery["tvs"]>["data"][number]["attributes"]
>;

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

export const getFrontalPicture = (tv: TV) => {
  const pictures = getPictures(tv);
  const pic = pictures?.find((pic) =>
    pic?.alternativeText?.includes("frontal")
  );

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
