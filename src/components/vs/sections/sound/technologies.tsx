import React from "react";
import { useTvs } from "../../tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const SoundTechnologiesSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Tecnologías",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.sound?.technologies?.map((tech) => ({
          type: "text",
          value: tech?.name,
        })),
      }),
      {}
    ),
  });

  return <Specs title="Tecnologías" data={specs} />;
};

export default SoundTechnologiesSection;
