import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { CableConnectionSpecProps, SpecsProps } from "../specs/specs";

const ConnectionsSection = () => {
  const { connections } = useTv();

  const specs: SpecsProps["specs"] =
    connections?.cable
      ?.map((connection) => ({
        label: connection?.type?.connection?.name ?? "",
        value: {
          name: connection?.type?.name ?? "",
          quantity: connection?.quantity ?? 1,
        },
      }))
      .reduce((acc, { label, value }) => {
        const found = acc.find((i) => i.label === label);
        if (!found) {
          acc.push({ label, value: [value], type: "cable-connection" });
        } else {
          found.value = [...found.value, value];
        }
        return acc;
      }, [] as CableConnectionSpecProps[]) ?? [];

  return <Specs title="Conexiones por cable" specs={specs} />;
};

export default ConnectionsSection;
