import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const OthersDesignSection = () => {
  const { design } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (design?.screenShape?.name) {
    specs.push({
      type: "row",
      label: "Forma de la pantalla",
      value: {
        type: "text",
        value: design.screenShape.name,
      },
    });
  }

  if (design?.colors?.length) {
    specs.push({
      type: "list",
      label: "Colores",
      value: design?.colors?.map((color) => ({
        type: "color",
        name: color?.name || "",
        hex: color?.hex || "",
      })),
    });
  }

  if (design?.vesa?.size) {
    specs.push({
      type: "row",
      label: "VESA",
      value: {
        type: "text",
        value: `${design.vesa.size.replace("x", " x ")} mm`,
      },
    });
  }

  return <Specs title="Otros" specs={specs} />;
};

export default OthersDesignSection;
