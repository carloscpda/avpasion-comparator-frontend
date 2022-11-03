import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const BacklightAndContrastSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Contraste",
    value: buildTextValues(tvs, ({ image }) => {
      const contrast = image?.backlightAndContrast?.contrast;
      if (contrast) {
        return contrast === "0:1" ? "∞" : contrast;
      }
      return null;
    }),
  });

  specs.push({
    type: "row",
    label: "Luminosidad",
    value: buildTextValues(tvs, ({ image }) => {
      const brightness = image?.backlightAndContrast?.brightness;
      if (brightness) {
        return `${brightness} nits`;
      }
      return null;
    }),
  });

  return <Specs title="Iluminación y contraste" data={specs} />;
};

export default BacklightAndContrastSection;
