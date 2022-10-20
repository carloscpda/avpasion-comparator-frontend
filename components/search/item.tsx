import {
  Box,
  Flex,
  Grid,
  HStack,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import TvPicture from "../tv/basics/picture";
import TvTitle from "../tv/basics/title";
import Score from "../score";
import TvReleaseDate from "../tv/basics/release-date";
import TvImageTechnology from "../tv/basics/image-technology";
import TvSerie from "../tv/basics/serie";
import TvEan from "../tv/basics/ean";
import TvResolution from "../tv/basics/resolution";
import TvScreenSize from "../tv/basics/screen-size";

type SearchItemProps = {
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
  children?: ReactNode;
};

const SearchItem = ({
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
  children,
}: SearchItemProps) => {
  return (
    <VStack width="100%" position="relative">
      <HStack
        mt="4"
        justifyContent="space-between"
        position="absolute"
        top="1"
        right="2"
        zIndex="2"
      >
        <Tag size="md" variant="subtle" colorScheme="green">
          <TagLabel>1300 €</TagLabel>
        </Tag>
      </HStack>
      <TvPicture src={picture} alt={fullName} width="100%" height={200} />
      <Box
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius={16}
        py="2"
        px="4"
        width="100%"
      >
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
        {children}
      </Box>
    </VStack>
  );
};

export default SearchItem;
