import React from "react";
import { useTvs } from "../../tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";
import { buildTextValues } from "../specs/helpers";

const ResolutionSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["specs"] = [];

  specs.push({
    type: "row",
    label: "Diagonal",
    value: buildTextValues(tvs, ({ general }) => {
      if (general?.screenSize) {
        return `${general.screenSize.toString()} pulgadas`;
      }
      return null;
    }),
  });

  specs.push({
    type: "row",
    label: "Resolución",
    value: buildTextValues(tvs, ({ image }) => {
      if (image?.resolution?.resolution) {
        let value = image.resolution.resolution.replace(":", " x ");

        if (image.resolution.alternativeName) {
          value = `${value} · ${image.resolution.alternativeName}`;
        }

        return value;
      }
      return null;
    }),
  });

  specs.push({
    type: "row",
    label: "Densidad de píxeles",
    value: buildTextValues(tvs, ({ image, general }) => {
      if (general?.screenSize && image?.resolution?.resolution) {
        const catetos = image.resolution.resolution
          .split(":")
          .map((i) => parseInt(i, 10));
        const diagonal = Math.sqrt(
          Math.pow(catetos[0], 2) + Math.pow(catetos[1], 2)
        );
        const dpp = (diagonal / general.screenSize).toFixed(0);

        return `${dpp} ppi`;
      }
      return null;
    }),
  });

  return <Specs title="Tamaño de pantalla" specs={specs} />;
};

export default ResolutionSection;
