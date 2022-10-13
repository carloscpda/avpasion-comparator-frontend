import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const PowerSupplySection = () => {
  const { system } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (system?.powerSupply) {
    specs.push({
      type: "row",
      label: "Alimentación",
      value: {
        type: "text",
        value: `${system?.powerSupply} W`,
      },
    });
  }

  if (system?.powerSupplyFrequency) {
    specs.push({
      type: "row",
      label: "Frecuencia corriente",
      value: {
        type: "text",
        value: `${system.powerSupplyFrequency} Hz`,
      },
    });
  }

  return <Specs title="Alimentación" specs={specs} />;
};

export default PowerSupplySection;
