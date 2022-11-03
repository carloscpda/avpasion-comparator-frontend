import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

type Props = {
  title: string;
  tag: "dimensionsWithStand" | "dimensionsWithoutStand";
  withHead?: boolean;
};

const StructureSection = ({ tag, title, withHead }: Props) => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Ancho",
    value: buildTextValues(tvs, (tv) => {
      const width = tv.design?.[tag]?.width;
      return width ? `${width} cm` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Altura",
    value: buildTextValues(tvs, (tv) => {
      const height = tv.design?.[tag]?.height;
      return height ? `${height} cm` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Profundidad",
    value: buildTextValues(tvs, (tv) => {
      const depth = tv.design?.[tag]?.depth;
      return depth ? `${depth} cm` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Peso",
    value: buildTextValues(tvs, (tv) => {
      const weight = tv.design?.[tag]?.weight;
      return weight ? `${weight} Kg` : null;
    }),
  });

  return <Specs title={title} data={specs} withHead={withHead} />;
};

export const StructureWithStandSection = () => {
  return (
    <StructureSection
      title="Dimensiones con peana"
      tag="dimensionsWithStand"
      withHead
    />
  );
};

export const StructureWithoutStandSection = () => {
  return (
    <StructureSection
      title="Dimensiones sin peana"
      tag="dimensionsWithoutStand"
    />
  );
};
