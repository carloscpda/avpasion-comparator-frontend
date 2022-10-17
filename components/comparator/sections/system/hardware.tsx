import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const HardwareSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "ROM",
    value: buildTextValues(tvs, (tv) => {
      const rom = tv?.system?.hardware?.rom;
      return rom ? `${rom} Gb` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "RAM",
    value: buildTextValues(tvs, (tv) => {
      const ram = tv?.system?.hardware?.ram;
      return ram ? `${ram} Gb` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "SoC",
    value: buildTextValues(
      tvs,
      (tv) => tv?.system?.hardware?.soc?.data?.attributes?.name
    ),
  });

  return <Specs title="Hardware" data={specs} />;
};

export default HardwareSection;
