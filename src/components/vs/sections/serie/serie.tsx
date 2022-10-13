import { Box, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import { useTv } from "../../tv-provider";
import SerieTv from "./serie-tv";

type SerieSectionProps = {
  tvs: Queries.TvPageQuery["allStrapiTv"];
};

const SerieSection = ({ tvs }: SerieSectionProps) => {
  const { general } = useTv();
  return (
    <Box mb="10">
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb="4"
      >
        {`Serie ${general?.brand?.serie?.brand?.name} ${general?.brand?.serie?.name}`}
      </Heading>
      <Wrap>
        {tvs.nodes.map((tv) => (
          <SerieTv
            name={tv.name}
            slug={tv.slug}
            resolution={tv.image?.resolution?.alternativeName}
            screenSize={tv.general?.screenSize}
          />
        ))}
      </Wrap>
    </Box>
  );
};

export default SerieSection;
