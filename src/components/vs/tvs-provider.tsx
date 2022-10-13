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

  if (!tvs) {
    throw "No TVs value exists";
  }

  return tvs;
};

export default TvsProvider;
