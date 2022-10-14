import React from "react";
import { useTvs } from "../../tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ResponseTimesSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Input lag (60Hz)",
    value: buildTextValues(tvs, ({ image }) => {
      const inputLag60 = image?.responseTimes?.inputLag60;
      return inputLag60 ? `${inputLag60} ms` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Input lag (120Hz)",
    value: buildTextValues(tvs, ({ image }) => {
      const inputLag120 = image?.responseTimes?.inputLag120;
      return inputLag120 ? `${inputLag120} ms` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Input lag (60Hz)",
    value: buildTextValues(tvs, ({ image }) => {
      const inputLag60 = image?.responseTimes?.inputLag60;
      return inputLag60 ? `${inputLag60} ms` : null;
    }),
  });

  specs.push({
    type: "list",
    label: "Gaming",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv?.image?.responseTimes?.gaming?.map((tech) => ({
          type: "text",
          value: tech?.name,
        })),
      }),
      {}
    ),
  });

  return <Specs title="Tiempos de respuesta y gaming" data={specs} />;
};

export default ResponseTimesSection;
