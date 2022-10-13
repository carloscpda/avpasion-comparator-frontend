import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

type Props = {
  title: string;
  dimensions?: {
    width: number | null;
    height: number | null;
    depth: number | null;
    weight: number | null;
  } | null;
};

const StructureSection = ({ dimensions, title }: Props) => {
  const specs: SpecsProps["specs"] = [];

  if (dimensions) {
    const { weight, depth, height, width } = dimensions;

    specs.push({
      type: "row",
      label: "Ancho",
      value: {
        type: "text",
        value: `${width} cm`,
      },
    });

    specs.push({
      type: "row",
      label: "Altura",
      value: {
        type: "text",
        value: `${height} cm`,
      },
    });

    specs.push({
      type: "row",
      label: "Profundidad",
      value: {
        type: "text",
        value: `${depth} cm`,
      },
    });

    specs.push({
      type: "row",
      label: "Peso",
      value: {
        type: "text",
        value: `${weight} Kg`,
      },
    });
  }

  return <Specs title={title} specs={specs} />;
};

export const StructureWithStandSection = () => {
  const { design } = useTv();

  return (
    <StructureSection
      title="Dimensiones con peana"
      dimensions={design?.dimensionsWithStand}
    />
  );
};

export const StructureWithoutStandSection = () => {
  const { design } = useTv();

  return (
    <StructureSection
      title="Dimensiones sin peana"
      dimensions={design?.dimensionsWithoutStand}
    />
  );
};
