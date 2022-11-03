import { useTvs } from "../../../tv/tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const HDRSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Tecnologías HDR",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: tv?.image?.hdr?.technologies?.data?.map(
          (tech) => ({
            type: "text",
            value: tech?.attributes?.name,
          })
        ),
      }),
      {}
    ),
  });

  return <Specs title="HDR" data={specs} />;
};

export default HDRSection;
