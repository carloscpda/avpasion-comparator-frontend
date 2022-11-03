import { Box, Wrap } from "@chakra-ui/react";
import { TVSeries } from "../../../models/tv-serie";
import SectionTitle from "../../section-title";
import { useTvs } from "../tvs-provider";
import SerieTv from "./serie-tv";

type SerieSectionProps = {
  tvs: TVSeries;
};

const SerieSection = ({ tvs }: SerieSectionProps) => {
  const { general } = useTvs().tvs[0];

  return (
    <Box mb="10">
      <SectionTitle
        title={`Serie ${general?.brand?.serie?.data?.attributes?.brand?.data?.attributes?.name} ${general?.brand?.serie?.data?.attributes?.name}`}
      />
      <Wrap>
        {tvs.map((tv) => (
          <SerieTv
            key={tv?.slug}
            name={tv?.name}
            slug={tv?.slug}
            resolution={
              tv?.image?.resolution?.data?.attributes?.alternativeName
            }
            screenSize={tv?.general?.screenSize}
            price={tv?.minPrice || 0}
          />
        ))}
      </Wrap>
    </Box>
  );
};

export default SerieSection;
