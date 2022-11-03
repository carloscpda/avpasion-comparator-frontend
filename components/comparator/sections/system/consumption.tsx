import { useTvs } from "../../../tv/tvs-provider";
import { buildTextValues } from "../specs/helpers";
import Specs, { SpecsProps } from "../specs/specs";

const ConsumptionSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  specs.push({
    type: "row",
    label: "Eficiencia energética",
    value: tvs.reduce(
      (acc, tv) => ({
        ...acc,
        [tv.slug as string]: {
          type: "energy-efficiency",
          letter: tv.system?.consumption?.energyEfficiency,
        },
      }),
      {}
    ),
  });

  specs.push({
    type: "row",
    label: "Consumo medio",
    value: buildTextValues(tvs, (tv) => {
      const averageConsumption = tv?.system?.consumption?.averageConsumption;
      return averageConsumption ? `${averageConsumption} W` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Consumo máximo",
    value: buildTextValues(tvs, (tv) => {
      const consumption = tv?.system?.consumption?.consumption;
      return consumption ? `${consumption} W` : null;
    }),
  });

  specs.push({
    type: "row",
    label: "Consumo stand-by",
    value: buildTextValues(tvs, (tv) => {
      const standbyConsumption = tv?.system?.consumption?.standbyConsumption;
      return standbyConsumption ? `${standbyConsumption} W` : null;
    }),
  });

  return <Specs title="Consumo" data={specs} />;
};

export default ConsumptionSection;
