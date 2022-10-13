import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { ListSpecProps } from "../specs/specs";

const WirelessConnectionsSection = () => {
  const { connections } = useTv();

  if (connections?.wireless) {
    const specs = connections.wireless.reduce((acc, connection) => {
      if (connection?.name && connection.type?.name) {
        const found = acc.find((i) => i.label === connection.type?.name);
        if (!found) {
          acc.push({
            type: "list",
            label: connection.type.name,
            value: [{ type: "text", value: connection.name }],
          });
        } else {
          found.value = [
            ...found.value,
            { type: "text", value: connection.name },
          ];
        }
      }

      return acc;
    }, [] as ListSpecProps[]);

    return <Specs title="Conexiones inalámbricas" specs={specs} />;
  }
  return null;
};

export default WirelessConnectionsSection;
