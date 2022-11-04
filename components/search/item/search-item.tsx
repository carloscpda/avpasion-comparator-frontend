import { Box, Button, Flex, Grid, HStack, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import Score from "../../score";
import TvEan from "../../tv/basics/ean";
import TvImageTechnology from "../../tv/basics/image-technology";
import TvPicture from "../../tv/basics/picture";
import TvReleaseDate from "../../tv/basics/release-date";
import TvResolution from "../../tv/basics/resolution";
import TvScreenSize from "../../tv/basics/screen-size";
import TvSerie from "../../tv/basics/serie";
import TvTitle from "../../tv/basics/title";

type SearchItemProps = {
  picture: string;
  fullName: string;
  slug: string;
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
  buttons?: ReactNode;
  price?: ReactNode;
};

const SearchItem = ({
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
  buttons,
}: SearchItemProps) => {
  return (
    <VStack
      width="100%"
      position="relative"
      boxShadow="lg"
      borderRadius="md"
      p="1"
    >
      <NextLink href={`/tv/${slug}`} passHref>
        <Box
          width="100%"
          cursor="pointer"
          as="a"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.01)" }}
        >
          <TvPicture src={picture} alt={fullName} height={240} />
        </Box>
      </NextLink>
      <Box py="2" px="4" width="100%">
        <Flex justifyContent="space-between" alignItems="flex-start">
          <TvTitle brand={brand} model={model} size="md" captionSize="sm" />
          <Score value={score} size={50} />
        </Flex>
        <Grid
          my="2"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          borderColor="gray.100"
        >
          {releaseDate && <TvReleaseDate value={releaseDate} />}
          {imageTechnology && <TvImageTechnology value={imageTechnology} />}
          {serie && <TvSerie value={serie} />}
          {ean && <TvEan value={ean} />}
          {resolution && <TvResolution value={resolution} />}
          {screenSize && <TvScreenSize value={screenSize} />}
        </Grid>
        <HStack justifyContent="flex-end">
          <NextLink href={`/compare?tv=${slug}`} passHref>
            <Button
              as="a"
              colorScheme="gray"
              color="sale.700"
              size="sm"
              variant="ghost"
            >
              Comparar
            </Button>
          </NextLink>
          {buttons}
        </HStack>
      </Box>
      <HStack
        mt="4"
        justifyContent="space-between"
        alignItems="flex-start"
        position="absolute"
        top="10"
        right="4"
        zIndex="2"
      >
        {price}
      </HStack>
    </VStack>
  );
};

export default SearchItem;
