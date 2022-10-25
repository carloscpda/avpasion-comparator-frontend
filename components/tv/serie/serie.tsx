import { Box, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import { TVSeries } from "../../../models/tv-serie";
import { useTvs } from "../tvs-provider";
import SerieTv from "./serie-tv";

type SerieSectionProps = {
  tvs: TVSeries;
};

const SerieSection = ({ tvs }: SerieSectionProps) => {
  const { general } = useTvs().tvs[0];

  return (
    <Box mb="10">
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb="4"
      >
        {`Serie ${general?.brand?.serie?.data?.attributes?.brand?.data?.attributes?.name} ${general?.brand?.serie?.data?.attributes?.name}`}
      </Heading>
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
