import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ResolutionSection = () => {
  const { general, image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (general?.screenSize) {
    specs.push({
      type: "row",
      label: "Diagonal",
      value: {
        type: "text",
        value: `${general.screenSize.toString()} pulgadas`,
      },
    });
  }

  if (image?.resolution?.resolution) {
    let value = image.resolution.resolution.replace(":", " x ");

    if (image.resolution.alternativeName) {
      value = `${value} · ${image.resolution.alternativeName}`;
    }

    specs.push({
      type: "row",
      label: "Resolución",
      value: {
        type: "text",
        value,
      },
    });
  }

  if (general?.screenSize && image?.resolution?.resolution) {
    const catetos = image.resolution.resolution
      .split(":")
      .map((i) => parseInt(i, 10));
    const diagonal = Math.sqrt(
      Math.pow(catetos[0], 2) + Math.pow(catetos[1], 2)
    );
    const dpp = (diagonal / general.screenSize).toFixed(0);

    specs.push({
      type: "row",
      label: "Densidad de píxeles",
      value: {
        type: "text",
        value: `${dpp} ppi`,
      },
    });
  }

  return <Specs title="Tamaño de pantalla" specs={specs} />;
};

export default ResolutionSection;
