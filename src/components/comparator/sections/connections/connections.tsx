import React from "react";
import { useTvs } from "../../../tv/tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const ConnectionsSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  const allConnections = tvs
    .map((tv) => tv.connections?.cable?.map((c) => c?.type?.connection?.name))
    .flat(1)
    .filter((v, i, a) => a.indexOf(v) === i) as string[];

  allConnections.forEach((conn) => {
    specs.push({
      type: "list",
      label: conn,
      value: tvs.reduce(
        (acc, tv) => ({
          ...acc,
          [tv.slug as string]: tv.connections?.cable
            ?.filter((c) => c?.type?.connection?.name === conn)
            ?.map((c) => ({
              type: "quantity",
              name: c?.type?.name,
              quantity: c?.quantity,
            })),
        }),
        {}
      ),
    });
  });

  return <Specs title="Conexiones por cable" data={specs} />;
};

export default ConnectionsSection;
