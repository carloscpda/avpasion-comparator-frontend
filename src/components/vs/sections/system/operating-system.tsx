import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const OperatingSystemSection = () => {
  const { system } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (
    system?.operatingSystem?.version &&
    system.operatingSystem.operatingSystem?.name
  ) {
    specs.push({
      type: "row",
      label: "Sistema Operativo",
      value: {
        type: "text",
        value: `${system.operatingSystem.operatingSystem.name} ${system.operatingSystem.version}`,
      },
    });
  }

  if (system?.voiceAssistants?.length) {
    specs.push({
      type: "list",
      label: "Asistentes de voz",
      value: system.voiceAssistants.map((voice) => ({
        type: "text",
        value: voice?.name || "-",
      })),
    });
  }

  return <Specs title="Sistema Operativo" specs={specs} />;
};

export default OperatingSystemSection;
