import placeholderPic from "../public/tv-placeholder.png";

type Picture = {
  alternativeText: string;
  url: string;
  height?: string;
  width?: string;
};

export const buildPicture = (path: string, options?: { width?: number }) => {
  let params = "";
  let pixelRatio = 1;

  if (typeof window !== "undefined") {
    pixelRatio = window.devicePixelRatio || 1;
  }

  if (options) {
    const width = options.width
      ? (options.width * pixelRatio).toString()
      : null;

    const searchParams = Object.fromEntries(
      Object.entries({ width }).filter(([_, v]) => v != null)
    ) as { [key: string]: string };

    params = `?${new URLSearchParams(searchParams).toString()}`;
  }

  return `https://cdn.avpasion.com/ctv-statics/${path.substring(9)}${params}`;
};

const getFrontalPicture = (pictures: Picture[]) => {
  return pictures.find((pic) => pic.alternativeText.includes("frontal"));
};

const getPictureDefinition = (pictures: Picture[]) => {
  const frontal = getFrontalPicture(pictures);
  if (frontal) {
    return { ...frontal, url: buildPicture(frontal.url) };
  }

  if (pictures[0]?.url) {
    return { ...pictures[0], url: buildPicture(pictures[0].url) };
  }

  return {
    url: placeholderPic as unknown as string,
    alternativeText: "placeholder",
  };
};

export const getPicture = (pictures: Picture[]) => {
  const picture = getPictureDefinition(pictures);
  return picture.url;
};

export const getSecondaryPictures = (pictures: Picture[]) => {
  const frontal = getFrontalPicture(pictures);
  const secondaryPics = pictures.filter((pic) => pic.url !== frontal?.url);

  return secondaryPics.map((pic) => ({
    alternativeText: pic.alternativeText,
    url: buildPicture(pic.url),
  }));
};

const Picture = {
  getPicture,
  getSecondaryPictures,
  getPictureDefinition,
};

export default Picture;
