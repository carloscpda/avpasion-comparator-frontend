import React, { useContext } from "react";

type TvProviderData = { fullName: string } & Queries.TvPageQuery["strapiTv"];

const TvContext = React.createContext<TvProviderData | null>(null);

const TvProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Queries.TvPageQuery["strapiTv"];
}) => {
  const fullName = `${value?.general?.brand?.serie?.brand?.name} ${value?.name}`;

  return (
    <TvContext.Provider value={value ? { ...value, fullName } : null}>
      {children}
    </TvContext.Provider>
  );
};

export const useTv = () => {
  const tv = useContext(TvContext);

  if (!tv) {
    throw "No TV value exists";
  }

  return tv;
};

export default TvProvider;
