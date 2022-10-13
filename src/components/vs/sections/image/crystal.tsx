import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const CrystalSection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.crystal?.horizontalVisionAngle) {
    specs.push({
      type: "row",
      label: "Ángulo de visión horizontal",
      value: {
        type: "text",
        value: `${image.crystal.horizontalVisionAngle}º`,
      },
    });
  }

  if (image?.crystal?.verticalVisionAngle) {
    specs.push({
      type: "row",
      label: "Ángulo de visión vertical",
      value: {
        type: "text",
        value: `${image.crystal.verticalVisionAngle}º`,
      },
    });
  }

  if (image?.crystal?.antiReflectiveFilter) {
    const value = {
      normal: "Normal",
      improved: "Mejorado",
    }[image.crystal.antiReflectiveFilter];

    specs.push({
      type: "row",
      label: "Filtro anti-reflejos",
      value: {
        type: "text",
        value: value || "-",
      },
    });
  }

  return <Specs title="Cristal" specs={specs} />;
};

export default CrystalSection;
