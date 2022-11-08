import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactNode } from "react";
import Score from "../../score";
import TvPicture from "../../tv/basics/picture";
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
  resolutionIcon?: string;
  screenSize?: number;
  buttons?: ReactNode;
  price?: ReactNode;
  isComparable?: boolean;
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
  resolutionIcon,
  screenSize,
  price,
  buttons,
  isComparable,
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
        <Flex gap="2" my="2">
          {resolutionIcon && (
            <Image
              src={`${resolutionIcon}?saturation=-75&width=96`}
              alt="resolution"
              height="32"
              width="48"
              objectFit="contain"
              unoptimized
            />
          )}
          <Tag
            variant="outline"
            colorScheme="black"
            bg="white"
            borderColor="black"
            borderWidth="2px"
            fontWeight="extrabold"
            borderRadius="sm"
          >
            <TagLabel>{`${screenSize}"`}</TagLabel>
          </Tag>
          <Tag
            variant="solid"
            bg="black"
            fontWeight="extrabold"
            borderRadius="sm"
          >
            <TagLabel>{imageTechnology}</TagLabel>
          </Tag>
          <Tag
            variant="solid"
            bg="white"
            color="black"
            fontWeight="medium"
            borderRadius="sm"
          >
            <TagLabel>{releaseDate?.split("-")[0]}</TagLabel>
          </Tag>
        </Flex>
        <Divider />
        <HStack justifyContent="flex-end" mt="2">
          {isComparable && (
            <NextLink href={`/compare?tv=${slug}`} passHref>
              <Button
                as="a"
                colorScheme="red"
                color="sale.700"
                borderColor="sale.700"
                size="sm"
                variant="outline"
              >
                Comparar
              </Button>
            </NextLink>
          )}
          {buttons}
        </HStack>
      </Box>
      <HStack
        mt="4"
        justifyContent="space-between"
        alignItems="flex-start"
        position="absolute"
        top="2"
        right="4"
        zIndex="2"
      >
        {price}
      </HStack>
    </VStack>
  );
};

export default SearchItem;
