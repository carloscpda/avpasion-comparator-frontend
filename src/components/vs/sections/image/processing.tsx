import React from "react";
import { useTvs } from "../../tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ProcessingSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Procesador",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.processing?.processor?.name
    ),
  });

  return <Specs title="Procesado" data={specs} />;
};

export default ProcessingSection;
