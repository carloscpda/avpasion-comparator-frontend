import React from "react";
import { useTvs } from "../../tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";
import { buildTextValues } from "../specs/helpers";

const ImageTechnologySection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Tecnología de imagen",
    value: buildTextValues(tvs, ({ image }) => image?.technology?.image?.name),
  });

  specs.push({
    type: "row",
    label: "Tecnología de panel",
    value: buildTextValues(tvs, ({ image }) => image?.technology?.panel?.type),
  });

  specs.push({
    type: "row",
    label: "Fabricante",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.technology?.panelManufacturer?.name
    ),
  });

  return <Specs title="Tecnología" data={specs} />;
};

export default ImageTechnologySection;
