import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ResponseTimesSection = () => {
  const { image } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (image?.responseTimes?.inputLag60) {
    specs.push({
      type: "row",
      label: "Input lag (60Hz)",
      value: {
        type: "text",
        value: `${image?.responseTimes?.inputLag60} ms`,
      },
    });
  }

  if (image?.responseTimes?.inputLag120) {
    specs.push({
      type: "row",
      label: "Input lag (120Hz)",
      value: {
        type: "text",
        value: `${image?.responseTimes?.inputLag120} ms`,
      },
    });
  }

  if (image?.responseTimes?.gaming?.length) {
    specs.push({
      type: "list",
      label: "Gaming",
      value: image.responseTimes.gaming.map((tech) => ({
        type: "text",
        value: tech?.name || "",
      })),
    });
  }

  return <Specs title="Tiempos de respuesta y gaming" specs={specs} />;
};

export default ResponseTimesSection;
