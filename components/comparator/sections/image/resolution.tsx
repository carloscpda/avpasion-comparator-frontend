import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ResolutionSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Diagonal",
    value: buildTextValues(tvs, ({ general }) => {
      if (general?.screenSize) {
        return `${general.screenSize.toString()} pulgadas`;
      }
      return null;
    }),
  });

  specs.push({
    type: "row",
    label: "Resolución",
    value: buildTextValues(tvs, ({ image }) => {
      if (image?.resolution?.data?.attributes?.resolution) {
        let value = image.resolution.data.attributes.resolution.replace(
          ":",
          " x "
        );

        if (image.resolution.data.attributes.alternativeName) {
          value = `${value} · ${image.resolution.data.attributes.alternativeName}`;
        }

        return value;
      }
      return null;
    }),
  });

  specs.push({
    type: "row",
    label: "Densidad de píxeles",
    value: buildTextValues(tvs, ({ image, general }) => {
      if (
        general?.screenSize &&
        image?.resolution?.data?.attributes?.resolution
      ) {
        const catetos = image.resolution.data.attributes.resolution
          .split(":")
          .map((i) => parseInt(i, 10));
        const diagonal = Math.sqrt(
          Math.pow(catetos[0], 2) + Math.pow(catetos[1], 2)
        );
        const dpp = (diagonal / general.screenSize).toFixed(0);

        return `${dpp} ppi`;
      }
      return null;
    }),
  });

  return <Specs title="Tamaño de pantalla" data={specs} withHead />;
};

export default ResolutionSection;
