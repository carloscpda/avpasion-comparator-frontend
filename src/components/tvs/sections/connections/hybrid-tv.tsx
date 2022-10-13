import React from "react";
import { useTv } from "../../tv-provider";
import Specs from "../specs/specs";

const HybridTvSection = () => {
  const { connections } = useTv();

  return (
    <Specs
      title="Televisión híbrida"
      specs={[
        {
          label: "HbbTV",
          type: "row",
          value: {
            type: "bool",
            value: !!connections?.hbbTV,
          },
        },
      ]}
    />
  );
};

export default HybridTvSection;
