import { Button, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import parseCurrency from "../../../helpers/parse-currency";
import SearchItem from "./search-item";

type SearchTvItemProps = {
  slug: string;
  picture: string;
  fullName: string;
  brand?: string;
  model?: string;
  score: number;
  releaseDate?: string;
  imageTechnology?: string;
  serie?: string;
  ean?: string;
  resolution?: {
    resolution: string;
    alternativeName?: string;
  };
  screenSize?: number;
  price?: number;
};

const SearchTvItem = ({
  slug,
  picture,
  fullName,
  brand,
  model,
  score,
  releaseDate,
  imageTechnology,
  serie,
  ean,
  resolution,
  screenSize,
  price,
}: SearchTvItemProps) => {
  return (
    <SearchItem
      slug={slug}
      picture={picture}
      fullName={fullName}
      brand={brand}
      model={model}
      score={score}
      releaseDate={releaseDate}
      imageTechnology={imageTechnology}
      serie={serie}
      ean={ean}
      resolution={resolution}
      screenSize={screenSize}
      price={
        !!price && (
          <VStack
            alignItems="flex-end"
            borderRadius="8"
            bg="whiteAlpha.800"
            backdropFilter="auto"
            backdropBlur="4px"
            border="gray.100"
            borderWidth="1px"
            spacing="0"
            p="2"
            pl="8"
          >
            <Text fontSize="xs">Desde</Text>
            <Text fontSize="2xl" fontWeight="bold">
              {parseCurrency(price)}
            </Text>
          </VStack>
        )
      }
      buttons={
        <>
          <NextLink href={`/compare?tv=${slug}`} passHref>
            <Button
              as="a"
              colorScheme="white"
              color="sale.700"
              size="sm"
              variant="outline"
            >
              Comparar
            </Button>
          </NextLink>
          <NextLink href={`/tv/${slug}`} passHref>
            <Button as="a" colorScheme="white" bg="sale.700" size="sm">
              Ver detalles
            </Button>
          </NextLink>
        </>
      }
    />
  );
};

export default SearchTvItem;
