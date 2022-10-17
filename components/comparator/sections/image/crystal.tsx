import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const CrystalSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Ángulo de visión horizontal",
    value: buildTextValues(tvs, ({ image }) => {
      const horizontalVisionAngle = image?.crystal?.horizontalVisionAngle;
      return horizontalVisionAngle ? `${horizontalVisionAngle}º` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Ángulo de visión vertical",
    value: buildTextValues(tvs, ({ image }) => {
      const verticalVisionAngle = image?.crystal?.verticalVisionAngle;
      return verticalVisionAngle ? `${verticalVisionAngle}º` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Filtro anti-reflejos",
    value: buildTextValues(tvs, ({ image }) => {
      return {
        normal: "Normal",
        improved: "Mejorado",
      }[image?.crystal?.antiReflectiveFilter];
    }),
  });

  return <Specs title="Cristal" data={specs} />;
};

export default CrystalSection;
