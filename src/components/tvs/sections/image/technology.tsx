import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ImageTechnologySection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.technology?.image) {
    specs.push({
      type: "row",
      label: "Tecnología de imagen",
      value: {
        type: "text",
        value: image?.technology?.image.name || "-",
      },
    });
  }

  if (image?.technology?.panel) {
    specs.push({
      type: "row",
      label: "Tecnología de panel",

      value: {
        type: "text",
        value: image?.technology?.panel.type || "-",
      },
    });
  }

  if (image?.technology?.panelManufacturer) {
    specs.push({
      type: "row",
      label: "Fabricante",
      value: {
        type: "text",
        value: image?.technology?.panelManufacturer?.name || "-",
      },
    });
  }

  return <Specs title="Tecnología" specs={specs} />;
};

export default ImageTechnologySection;
