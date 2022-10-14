import React from "react";
import { useTvs } from "../../tvs-provider";
import { buildBoolValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const HybridTvSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "HbbTV",
    value: buildBoolValues(tvs, ({ connections }) => !!connections?.hbbTV),
  });

  return <Specs title="DVB" data={specs} />;
};

export default HybridTvSection;
