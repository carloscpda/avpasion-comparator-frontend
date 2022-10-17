import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ExtraFeaturesSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Funcionalidades",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.connections?.extraFeatures?.data.map(
          (feature) => ({
            type: "text",
            value: feature?.attributes?.name,
          })
        ),
      }),
      {}
    ),
  });

  return <Specs title="Otras funcionalidades" data={specs} />;
};

export default ExtraFeaturesSection;
