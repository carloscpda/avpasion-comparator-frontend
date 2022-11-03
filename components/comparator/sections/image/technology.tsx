import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ImageTechnologySection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Tecnología de imagen",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.technology?.image?.data?.attributes?.name
    ),
  });

  specs.push({
    type: "row",
    label: "Tecnología de panel",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.technology?.panel?.data?.attributes?.type
    ),
  });

  specs.push({
    type: "row",
    label: "Tipo de iluminación",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.technology?.lightingType?.data?.attributes?.name
    ),
  });

  specs.push({
    type: "row",
    label: "Forma de creación de color",
    value: buildTextValues(
      tvs,
      ({ image }) => image?.technology?.creationColor?.data?.attributes?.name
    ),
  });

  specs.push({
    type: "row",
    label: "Fabricante",
    value: buildTextValues(
      tvs,
      ({ image }) =>
        image?.technology?.panelManufacturer?.data?.attributes?.name
    ),
  });

  return <Specs title="Tecnología" data={specs} />;
};

export default ImageTechnologySection;
