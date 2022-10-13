import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ConsumptionSection = () => {
  const { system } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (system?.consumption?.energyEfficiency) {
    specs.push({
      type: "row",
      label: "Eficiencia energética",
      value: {
        type: "energy-efficiency",
        letter: system.consumption.energyEfficiency as
          | "A"
          | "B"
          | "C"
          | "D"
          | "E"
          | "F"
          | "G",
      },
    });
  }

  if (system?.consumption?.averageConsumption) {
    specs.push({
      type: "row",
      label: "Consumo medio",
      value: {
        type: "text",
        value: `${system.consumption.averageConsumption} W`,
      },
    });
  }

  if (system?.consumption?.consumption) {
    specs.push({
      type: "row",
      label: "Consumo máximo",
      value: {
        type: "text",
        value: `${system.consumption.consumption} W`,
      },
    });
  }

  if (system?.consumption?.standbyConsumption) {
    specs.push({
      type: "row",
      label: "Consumo stand-by",
      value: {
        type: "text",
        value: `${system.consumption.standbyConsumption} W`,
      },
    });
  }

  return <Specs title="Consumo" specs={specs} />;
};

export default ConsumptionSection;
