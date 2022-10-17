import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ProcessingSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Procesador",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.processing?.processor?.data?.attributes?.name
    ),
  });

  return <Specs title="Procesado" data={specs} />;
};

export default ProcessingSection;
