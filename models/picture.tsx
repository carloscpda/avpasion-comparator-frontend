import placeholderPic from "../public/tv-placeholder.png";

type Picture = { alternativeText: string; url: string };

export const buildPicture = (path: string) => `https://cmc.avpasion.com${path}`;

const getFrontalPicture = (pictures: Picture[]) => {
  return pictures.find((pic) => pic.alternativeText.includes("frontal"));
};

export const getPicture = (pictures: Picture[]) => {
  const frontal = getFrontalPicture(pictures);
  if (frontal) {
    return buildPicture(frontal.url);
  }

  if (pictures[0]?.url) {
    return buildPicture(pictures[0].url);
  }

  return placeholderPic as unknown as string;
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
};

export default Picture;
