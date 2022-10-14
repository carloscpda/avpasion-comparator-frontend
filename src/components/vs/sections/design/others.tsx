import React from "react";
import { useTvs } from "../../tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const OthersDesignSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Forma de la pantalla",
    value: buildTextValues(tvs, (tv) => tv?.design?.screenShape?.name),
  });

  specs.push({
    type: "list",
    label: "Colores",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.design?.colors?.map((color) => ({
          type: "color",
          name: color?.name,
          hex: color?.hex,
        })),
      }),
      {}
    ),
  });

  specs.push({
    type: "row",
    label: "VESA",
    value: buildTextValues(tvs, (tv) => {
      const vesa = tv?.design?.vesa?.size;
      return vesa ? `${vesa.replace("x", " x ")} mm` : null;
    }),
  });

  return <Specs title="Otros" data={specs} />;
};

export default OthersDesignSection;
