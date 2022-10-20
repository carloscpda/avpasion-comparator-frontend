import placeholderPic from "../public/tv-placeholder.png";

type Picture = { alternativeText: string; url: string };

const buildPicture = (path: string) => `https://cmc.avpasion.com${path}`;

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

const Picture = {
  getPicture,
};

export default Picture;
