import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { navigate } from "gatsby";
import React from "react";
import { useTv } from "../../tv-provider";

type SerieSectionProps = {
  tvs: Queries.TvPageQuery["allStrapiTv"];
};

const SerieSection = ({ tvs }: SerieSectionProps) => {
  const { general, slug } = useTv();
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
          <WrapItem
            borderRadius="12"
            px="4"
            py="2"
            border="1px"
            borderColor="gray.100"
            minW="44"
            display="inline"
            transition="0.3s ease"
            cursor="pointer"
            background={tv.slug === slug ? "gray.100" : ""}
            _hover={{
              background: "gray.100",
            }}
            onClick={() => navigate(`/tv/${tv.slug}`)}
          >
            <Text>{tv.name}</Text>
            <Text fontSize="sm">
              {`${tv.general?.screenSize}" · ${tv.image?.resolution?.alternativeName}`}
            </Text>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default SerieSection;
