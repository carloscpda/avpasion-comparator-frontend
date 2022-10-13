import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const HDRSection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.hdr?.technologies?.length) {
    specs.push({
      type: "list",
      label: "Tecnologías HDR",
      value: image.hdr.technologies.map((tech) => ({
        type: "text",
        value: tech?.name || "-",
      })),
    });
  }

  return <Specs title="HDR" specs={specs} />;
};

export default HDRSection;
