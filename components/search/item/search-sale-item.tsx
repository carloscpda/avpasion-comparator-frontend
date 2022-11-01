import {
  Box,
  Button,
  Flex,
  HStack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import parseCurrency from "../../../helpers/parse-currency";
import SearchItem from "./search-item";

type SearchSaleItemProps = {
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
  price: number;
  affiliateUrl: string;
  basePrice: number;
  relativeDiscount: number;
  absoluteDiscount: number;
};

const SearchSaleItem = ({
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
  affiliateUrl,
  price,
  basePrice,
  relativeDiscount,
  absoluteDiscount,
}: SearchSaleItemProps) => {
  return (
    <SearchItem
      href={affiliateUrl}
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
        <Tag
          variant="subtle"
          colorScheme="purple"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          gap="1"
          py="1"
        >
          <HStack alignItems="flex-end">
            <TagLabel
              textDecoration="line-through"
              fontSize="sm"
              color="red.700"
            >
              {parseCurrency(basePrice)}
            </TagLabel>
            <TagLabel fontSize="lg" fontWeight="bold">
              {parseCurrency(price)}
            </TagLabel>
          </HStack>
          <TagLabel fontSize="xs">
            {`Te ahorras: ${parseCurrency(absoluteDiscount)}`}
            <Text as="span" fontSize="md" ml="4">{`${(
              relativeDiscount * 100
            ).toFixed(0)}%`}</Text>
          </TagLabel>
        </Tag>
      }
      buttons={
        <>
          <NextLink href={affiliateUrl} passHref>
            <Button as="a" colorScheme="gray" color="red.700" size="xs">
              Ver oferta
            </Button>
          </NextLink>
          <NextLink href={`/tv/${slug}`} passHref>
            <Button as="a" colorScheme="gray" color="red.700" size="xs">
              Ver ficha
            </Button>
          </NextLink>
        </>
      }
    />
  );
};

export default SearchSaleItem;
