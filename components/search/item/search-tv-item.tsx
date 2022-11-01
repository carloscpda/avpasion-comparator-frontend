import { Button, Tag, TagLabel } from "@chakra-ui/react";
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
      href={`/tv/${slug}`}
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
          gap="2"
        >
          <TagLabel fontSize="lg" fontWeight="bold">
            {price ? parseCurrency(price) : "Sin stock"}
          </TagLabel>
        </Tag>
      }
      buttons={
        <>
          <NextLink href={`/compare?tv=${slug}`} passHref>
            <Button as="a" colorScheme="gray" color="red.700" size="xs">
              Comparar
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

export default SearchTvItem;
