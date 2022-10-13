import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const SoundTechnologiesSection = () => {
  const { sound } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (sound?.technologies) {
    specs.push({
      label: "Tecnologías",
      type: "list",
      value: sound.technologies.map((tech) => ({
        type: "text",
        value: tech?.name || "",
      })),
    });

    return <Specs title="Tecnologías" specs={specs} />;
  }
  return null;
};

export default SoundTechnologiesSection;
