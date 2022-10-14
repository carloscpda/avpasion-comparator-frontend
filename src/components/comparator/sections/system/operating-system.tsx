import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const OperatingSystemSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Sistema operativo",
    value: buildTextValues(tvs, (tv) => {
      const version = tv?.system?.operatingSystem?.version;
      const name = tv?.system?.operatingSystem?.operatingSystem?.name;
      return version && name ? `${name} ${version}` : null;
    }),
  });

  specs.push({
    type: "list",
    label: "Asistentes de voz",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.system?.voiceAssistants?.map((voice) => ({
          type: "text",
          value: voice?.name,
        })),
      }),
      {}
    ),
  });

  return <Specs title="Sistema Operativo" data={specs} withHead />;
};

export default OperatingSystemSection;
