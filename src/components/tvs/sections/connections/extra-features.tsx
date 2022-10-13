import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ExtraFeaturesSection = () => {
  const { connections } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (connections?.extraFeatures) {
    connections.extraFeatures.forEach((feature) =>
      specs.push({
        type: "row",
        label: feature?.name || "",
        value: {
          type: "text",
          value: feature?.description || "",
        },
      })
    );

    return <Specs title="Otras funcionalidades" specs={specs} />;
  }
  return null;
};

export default ExtraFeaturesSection;
