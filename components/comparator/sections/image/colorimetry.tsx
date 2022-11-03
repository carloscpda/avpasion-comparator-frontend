import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ColorimetrySection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Rec. 709",
    value: buildTextValues(tvs, ({ image }) => {
      const rec709 = image?.colorimetry?.rec709;
      return rec709 ? `${rec709}%` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "DCI P3",
    value: buildTextValues(tvs, ({ image }) => {
      const dciP3 = image?.colorimetry?.dciP3;
      return dciP3 ? `${dciP3}%` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Rec. 2020",
    value: buildTextValues(tvs, ({ image }) => {
      const rec2020 = image?.colorimetry?.rec2020;
      return rec2020 ? `${rec2020}%` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "sRGB",
    value: buildTextValues(tvs, ({ image }) => {
      const sRGB = image?.colorimetry?.sRGB;
      return sRGB ? `${sRGB}%` : null;
    }),
  });

  return <Specs title="Colorimetría" data={specs} />;
};

export default ColorimetrySection;
