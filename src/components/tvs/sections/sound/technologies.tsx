import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const SoundTechnologiesSection = () => {
  const { sound } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (sound?.technologies) {
    sound.technologies.map((tech) =>
      specs.push({
        label: tech?.name || "",
        type: "row",
        value: {
          type: "text",
          value: "-",
        },
      })
    );

    return <Specs title="Tecnologías" specs={specs} />;
  }
  return null;
};

export default SoundTechnologiesSection;
