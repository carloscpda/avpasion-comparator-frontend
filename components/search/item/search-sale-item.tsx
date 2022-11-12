import { Button, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import parseCurrency from "../../../helpers/parse-currency";
import { buildPicture } from "../../../models/picture";
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
  resolutionIcon?: string;
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
  resolutionIcon,
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
      isComparable
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
            src={buildPicture(marketLogo, { width: 80 })}
            width={80}
            height={40}
            objectFit="contain"
            alt="market-logo"
          />
        </VStack>
      }
      buttons={
        <NextLink href={affiliateUrl} passHref prefetch={false}>
          <Button
            as="a"
            colorScheme="red"
            bg="sale.700"
            size="sm"
            target="_blank"
            rel="sponsored"
          >
            Ver oferta
          </Button>
        </NextLink>
      }
    />
  );
};

export default SearchSaleItem;
