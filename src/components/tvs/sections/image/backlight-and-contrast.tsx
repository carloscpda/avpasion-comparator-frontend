import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const BacklightAndContrastSection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.backlightAndContrast?.contrast) {
    const contrast = image.backlightAndContrast.contrast;

    const value = contrast === "0:1" ? "∞" : contrast;

    specs.push({
      type: "row",
      label: "Contraste",
      value: {
        type: "text",
        value,
      },
    });
  }

  if (image?.backlightAndContrast?.brightness) {
    specs.push({
      type: "row",
      label: "Luminosidad",
      value: {
        type: "text",
        value: `${image.backlightAndContrast.brightness} nits`,
      },
    });
  }

  return <Specs title="Iluminación y contraste" specs={specs} />;
};

export default BacklightAndContrastSection;
