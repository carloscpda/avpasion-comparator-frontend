import { Text, WrapItem } from "@chakra-ui/react";
import { navigate } from "gatsby";
import React from "react";
import { useTv } from "../../tv-provider";

type SerieTvProps = {
  slug: string | null;
  name: string | null;
  screenSize?: number | null;
  resolution?: string | null;
};

const SerieTv = ({ name, slug, resolution, screenSize }: SerieTvProps) => {
  const { slug: currentSlug } = useTv();

  const details = [];

  if (screenSize) {
    details.push(`${screenSize}"`);
  }

  if (resolution) {
    details.push(resolution);
  }

  return (
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
      background={currentSlug === slug ? "gray.100" : ""}
      _hover={{
        background: "gray.200",
      }}
      onClick={() => navigate(`/tv/${slug}`)}
    >
      <Text>{name}</Text>
      <Text fontSize="sm">{details.join(" · ")}</Text>
    </WrapItem>
  );
};

export default SerieTv;
