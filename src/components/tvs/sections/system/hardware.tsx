import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const HardwareSection = () => {
  const { system } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (system?.hardware?.rom) {
    specs.push({
      type: "row",
      label: "ROM",
      value: {
        type: "text",
        value: `${system.hardware.rom.toFixed(1)} Gb`,
      },
    });
  }

  if (system?.hardware?.ram) {
    specs.push({
      type: "row",
      label: "RAM",
      value: {
        type: "text",
        value: `${system.hardware.ram.toFixed(1)} Gb`,
      },
    });
  }

  if (system?.hardware?.soc?.name) {
    specs.push({
      type: "row",
      label: "SoC",
      value: {
        type: "text",
        value: system.hardware.soc.name,
      },
    });
  }

  return <Specs title="Hardware" specs={specs} />;
};

export default HardwareSection;
