import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React, { useContext } from "react";

export type TVs = Queries.TvComparatorPageQuery["allStrapiTv"]["nodes"];
export type TV = TVs[0];

const TvsContext = React.createContext<TVs | null>(null);

const TvsProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TVs;
}) => {
  return <TvsContext.Provider value={value}>{children}</TvsContext.Provider>;
};

export const useTvs = () => {
  const tvs = useContext(TvsContext);

  const { strapiScoreWeighting: scoreWeighting } =
    useStaticQuery<Queries.ScoreWeightingQuery>(graphql`
      query ScoreWeighting {
        strapiScoreWeighting {
          image
          sound
          connections
          design
          system
        }
      }
    `);

  if (!tvs) {
    throw "No TVs value exists";
  }

  const getFullName = (tv: TV) => {
    return `${tv.general?.brand?.serie?.brand?.name} ${tv.general?.brand?.model}`;
  };

  const getScore = (tv: TV) => {
    return (
      (scoreWeighting?.image || 0) * (tv.image?.score || 0) +
      (scoreWeighting?.sound || 0) * (tv.sound?.score || 0) +
      (scoreWeighting?.connections || 0) * (tv.connections?.score || 0) +
      (scoreWeighting?.design || 0) * (tv.design?.score || 0) +
      (scoreWeighting?.system || 0) * (tv.system?.score || 0)
    );
  };

  const getPicture = (tv: TV) => {
    return tv.design?.pictures?.[0]?.localFile?.childImageSharp
      ?.gatsbyImageData !== null
      ? // @ts-ignore
        getImage(tv.design.pictures[0].localFile)
      : null;
  };

  return { tvs, getFullName, getScore, getPicture };
};

export default TvsProvider;
