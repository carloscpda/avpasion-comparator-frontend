import React, { useContext } from "react";

const TvContext = React.createContext<Queries.TvPageQuery["strapiTv"] | null>(
  null
);

const TvProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Queries.TvPageQuery["strapiTv"];
}) => {
  return <TvContext.Provider value={value}>{children}</TvContext.Provider>;
};

export const useTv = () => {
  const tv = useContext(TvContext);

  if (!tv) {
    throw "No TV value exists";
  }

  return tv;
};

export default TvProvider;
