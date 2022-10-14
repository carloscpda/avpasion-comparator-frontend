import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const PowerSupplySection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Alimentación",
    value: buildTextValues(tvs, (tv) => {
      const powerSupply = tv.system?.powerSupply;
      return powerSupply ? `${powerSupply} W` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Frecuencia corriente",
    value: buildTextValues(tvs, (tv) => {
      const powerSupplyFrequency = tv.system?.powerSupplyFrequency;
      return powerSupplyFrequency ? `${powerSupplyFrequency} Hz` : null;
    }),
  });

  return <Specs title="Alimentación" data={specs} />;
};

export default PowerSupplySection;
