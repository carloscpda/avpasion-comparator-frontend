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
  resolutionIcon?: string;
  screenSize?: number;
  price?: number;
  isComparable?: boolean;
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
  resolutionIcon,
  screenSize,
  price,
  isComparable,
}: SearchTvItemProps) => {
  return (
    <SearchItem
      isComparable={isComparable}
      slug={slug}
      picture={picture}
      fullName={fullName}
      brand={brand}
      model={model}
      score={score}
      releaseDate={releaseDate}
      imageTechnology={imageTechnology}
      resolutionIcon={resolutionIcon}
      screenSize={screenSize}
      price={
        !!price && (
          <VStack
            alignItems="flex-end"
            borderRadius="md"
            bg="whiteAlpha.800"
            backdropFilter="auto"
            backdropBlur="4px"
            borderWidth="1px"
            borderColor="gray.200"
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
        <NextLink href={`/tv/${slug}`} passHref>
          <Button as="a" colorScheme="red" bg="sale.700" size="sm">
            Ver detalles
          </Button>
        </NextLink>
      }
    />
  );
};

export default SearchTvItem;
