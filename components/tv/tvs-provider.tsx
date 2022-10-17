import React, { useContext } from "react";
import { TV } from "../../models/tv";

const TvsContext = React.createContext<TV[] | null>(null);

const TvsProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TV[];
}) => {
  return <TvsContext.Provider value={value}>{children}</TvsContext.Provider>;
};

export const useTvs = () => {
  const tvs = useContext(TvsContext);

  if (!tvs) {
    throw "No TVs value exists";
  }

  return { tvs };
};

export default TvsProvider;
