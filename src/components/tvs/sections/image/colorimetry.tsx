import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ColorimetrySection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.colorimetry?.rec709) {
    specs.push({
      type: "row",
      label: "Rec. 709",
      value: {
        type: "text",
        value: `${image.colorimetry.rec709}%`,
      },
    });
  }

  if (image?.colorimetry?.dciP3) {
    specs.push({
      type: "row",
      label: "DCI P3",
      value: {
        type: "text",
        value: `${image.colorimetry.dciP3}%`,
      },
    });
  }

  if (image?.colorimetry?.rec2020) {
    specs.push({
      type: "row",
      label: "Rec. 2020",
      value: {
        type: "text",
        value: `${image.colorimetry.rec2020}%`,
      },
    });
  }

  if (image?.colorimetry?.sRGB) {
    specs.push({
      type: "row",
      label: "sRGB",
      value: {
        type: "text",
        value: `${image.colorimetry.sRGB}%`,
      },
    });
  }

  if (image?.colorimetry?.colorDepth?.name) {
    specs.push({
      type: "row",
      label: "Profundiad de color",
      value: {
        type: "text",
        value: image.colorimetry.colorDepth.name,
      },
    });
  }

  if (image?.colorimetry?.technologies?.length) {
    specs.push({
      type: "list",
      label: "Tecnologías",
      value: image.colorimetry.technologies.map((tech) => ({
        type: "text",
        value: tech?.name || "-",
      })),
    });
  }

  return <Specs title="Colorimetría" specs={specs} />;
};

export default ColorimetrySection;
