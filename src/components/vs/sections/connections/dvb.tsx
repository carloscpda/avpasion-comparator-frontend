import React from "react";
import { useTvs } from "../../tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const labelMap = {
  terrestrial: "Terrestre",
  cable: "Cable",
  satellite: "Satelital",
};

const DVBSection = () => {
  const tvs = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Terrestre",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.connections?.dvb
          ?.filter((dvb) => dvb?.type === "terrestrial")
          ?.map((tech) => ({
            type: "text",
            value: tech?.name,
          })),
      }),
      {}
    ),
  });

  specs.push({
    type: "list",
    label: "Satelital",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.connections?.dvb
          ?.filter((dvb) => dvb?.type === "satellite")
          ?.map((tech) => ({
            type: "text",
            value: tech?.name,
          })),
      }),
      {}
    ),
  });

  specs.push({
    type: "list",
    label: "Cable",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv.connections?.dvb
          ?.filter((dvb) => dvb?.type === "cable")
          ?.map((tech) => ({
            type: "text",
            value: tech?.name,
          })),
      }),
      {}
    ),
  });

  return <Specs title="DVB" data={specs} withHead />;
};

export default DVBSection;
