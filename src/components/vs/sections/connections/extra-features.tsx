import React from "react";
import { useTvs } from "../../tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ExtraFeaturesSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Funcionalidades",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.connections?.extraFeatures?.map((feature) => ({
          type: "text",
          value: feature?.name,
        })),
      }),
      {}
    ),
  });

  return <Specs title="Otras funcionalidades" data={specs} />;
};

export default ExtraFeaturesSection;
