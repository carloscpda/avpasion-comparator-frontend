import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";
import { SpecValueProps } from "../specs/value/value";

const SpeakersSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "list",
    label: "Altavoces",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: (tv.sound?.speakers || [])?.map((speaker) => ({
          type: "quantity",
          name: `${speaker?.power}W`,
          quantity: speaker?.quantity || 1,
        })),
      }),
      {} as { [slug: string]: SpecValueProps[] }
    ),
  });

  specs.push({
    type: "list",
    label: "Subwoofers",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: (tv.sound?.subwoofers || [])?.map((speaker) => ({
          type: "quantity",
          name: `${speaker?.power}W`,
          quantity: speaker?.quantity || 1,
        })),
      }),
      {} as { [slug: string]: SpecValueProps[] }
    ),
  });

  specs.push({
    type: "row",
    label: "Potencia",
    value: buildTextValues(tvs, (tv) => {
      const power = tv.sound?.power;
      return power ? `${power}W` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Canales de salida",
    value: buildTextValues(tvs, (tv) => tv.sound?.outputChannels),
  });

  return <Specs title="Altavoces" data={specs} withHead />;
};

export default SpeakersSection;
