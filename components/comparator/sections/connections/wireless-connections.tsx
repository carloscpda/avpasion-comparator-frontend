import { useTvs } from "../../../tv/tvs-provider";
import Specs, { SpecsProps } from "../specs/specs";

const WirelessConnectionsSection = () => {
  const { tvs } = useTvs();

  const specs: SpecsProps["data"] = [];

  const allConnections = tvs
    .map((tv) =>
      tv.connections?.wireless?.data.map(
        (c) => c?.attributes?.type?.data?.attributes?.name
      )
    )
    .flat(1)
    .filter((v, i, a) => a.indexOf(v) === i) as string[];

  allConnections.forEach((conn) => {
    specs.push({
      type: "list",
      label: conn,
      value: tvs.reduce(
        (acc, tv) => ({
          ...acc,
          [tv.slug as string]: tv.connections?.wireless?.data
            ?.filter((c) => c.attributes?.type?.data?.attributes?.name === conn)
            ?.map((c) => ({
              type: "text",
              value: c?.attributes?.name,
            })),
        }),
        {}
      ),
    });
  });

  return <Specs title="Conexiones inalámbricas" data={specs} />;
};

export default WirelessConnectionsSection;
