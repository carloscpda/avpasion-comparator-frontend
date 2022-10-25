import { Tag, TagLabel, Text, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import parseCurrency from "../../../helpers/parse-currency";
import { useTvs } from "../tvs-provider";

type SerieTvProps = {
  slug?: string | null;
  name?: string | null;
  screenSize?: number | null;
  resolution?: string | null;
  price?: number;
};

const SerieTv = ({
  name,
  slug,
  resolution,
  screenSize,
  price,
}: SerieTvProps) => {
  const router = useRouter();

  const { slug: currentSlug } = useTvs().tvs[0];

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
      onClick={() => router.push(`/tv/${slug}`)}
    >
      <Text>{name}</Text>
      <Text fontSize="sm">{details.join(" · ")}</Text>
      {!!price && (
        <Tag variant="subtle" colorScheme="yellow" mt="2">
          <TagLabel>{parseCurrency(price)}</TagLabel>
        </Tag>
      )}
    </WrapItem>
  );
};

export default SerieTv;
