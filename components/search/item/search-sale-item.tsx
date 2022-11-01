import { Button, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
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
  marketLogo: string;
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
  marketLogo,
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
          <Text textDecoration="line-through" fontSize="xs" color="red.700">
            {parseCurrency(basePrice)}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {parseCurrency(price)}
          </Text>
          <Text fontSize="xs">
            {`Ahorras: ${parseCurrency(absoluteDiscount)}`}
          </Text>
          <Text fontSize="xs">
            {`Descuento: ${(relativeDiscount * 100).toFixed(0)}%`}
          </Text>
          <Image
            src={marketLogo}
            width={80}
            height={40}
            objectFit="contain"
            alt="market-logo"
            unoptimized
          />
        </VStack>
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
