import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ProcessingSection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.processing?.processor?.name) {
    specs.push({
      type: "row",
      label: "Procesador",
      value: {
        type: "text",
        value: image.processing.processor.name,
      },
    });
  }

  return <Specs title="Procesado" specs={specs} />;
};

export default ProcessingSection;
