import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const labelMap = {
  terrestrial: "Terrestre",
  cable: "Cable",
  satellite: "Satelital",
};

const DVBSection = () => {
  const { connections } = useTv();

  if (connections?.dvb) {
    const specs: SpecsProps["specs"] = (
      connections.dvb as {
        type: "terrestrial" | "satellite" | "cable";
        name: string;
      }[]
    )
      .reduce(
        (acc, { type, name }) => {
          const found = acc.find((i) => i.type === type);
          if (!found) {
            acc.push({ type, value: [name] });
          } else {
            found.value = [...found.value, name];
          }
          return acc;
        },
        [] as {
          type: "terrestrial" | "satellite" | "cable";
          value: string[];
        }[]
      )
      .map((item) => ({
        type: "list",
        label: labelMap[item.type],
        value: item.value.map((value) => ({
          type: "text",
          value,
        })),
      }));

    return <Specs title="DVB" specs={specs} />;
  }
  return null;
};

export default DVBSection;
