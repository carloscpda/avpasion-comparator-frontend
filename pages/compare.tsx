import {
  Box,
  Button,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";

import Main from "../components/layout/main";
import { GetStaticProps } from "next";
import { FuzzySearch, getPicture } from "../models/fuzzy-search-tv";
import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { AsyncSelect, components, OptionProps } from "chakra-react-select";
import Link from "next/link";
import SearchItem from "../components/search/item/search-item";
import { useRouter } from "next/router";
import GeneralHead from "../components/head";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";

export const getStaticProps: GetStaticProps = async () => {
  const helpArticles = await getHelpArticlesProps();
  const tvs = await getFuzzySearch();

  return {
    props: {
      helpArticles,
      tvs,
    },
    revalidate: 60 * 10, // 10 mins
  };
};

const Option = (props: OptionProps<FuzzySearch>) => {
  return (
    <components.Option {...props}>
      <HStack alignItems="center">
        <Box flex="1">
          <Text color="red.700" fontSize="xs" textTransform="uppercase">
            {props.data.brand}
          </Text>
          <Text>{props.data.model}</Text>
        </Box>
        {props.data.resolutionAlt && (
          <Tag colorScheme="gray">
            <TagLabel>{props.data.resolutionAlt}</TagLabel>
          </Tag>
        )}
        {props.data.screenSize && (
          <Tag colorScheme="gray">
            <TagLabel>{`${props.data.screenSize}"`}</TagLabel>
          </Tag>
        )}
      </HStack>
    </components.Option>
  );
};

const ComparePage = ({ tvs }: { tvs: FuzzySearch[] }) => {
  const router = useRouter();
  const fuse = useMemo(() => {
    return new Fuse<FuzzySearch>(tvs, {
      keys: ["ean", "brand", "serie", "model"],
    });
  }, [tvs]);

  const [tv1, setTv1] = useState<FuzzySearch>(
    tvs.find((tv) => tv.slug === router.query.tv) || tvs[48]
  );
  const [tv2, setTv2] = useState<FuzzySearch>(tvs[1]);

  const handleSearch = (value: string) => {
    const searched = fuse.search(value, { limit: 10 });
    return searched.map((s) => s.item);
  };

  return (
    <Main>
      <GeneralHead slug="compare" title="Comparar" />
      <Heading>Comparar</Heading>
      <VStack
        flexDirection={{ base: "column", md: "row" }}
        height={{ md: "600px" }}
        mb={{ base: 10, md: 0 }}
        gap="10"
        justifyContent="center"
        alignItems="center"
      >
        <VStack flex="1" maxWidth="400px">
          <SearchItem
            slug={tv1.slug || ""}
            score={tv1.score || 0}
            brand={tv1.brand}
            model={tv1.model}
            ean={tv1.ean}
            serie={tv1.serie}
            fullName={`${tv1.brand} ${tv1.model}`}
            picture={getPicture(tv1)}
            price={tv1.price}
            imageTechnology={tv1.imageTechnology}
            resolution={{
              resolution: tv1.resolution,
              alternativeName: tv1.resolutionAlt,
            }}
            releaseDate={tv1.releaseDate}
            screenSize={tv1.screenSize}
          />
          <Box width="100%">
            <AsyncSelect<FuzzySearch>
              name="tv1"
              colorScheme="gray"
              placeholder="Selecciona una TV"
              loadOptions={(inputValue, callback) => {
                callback(handleSearch(inputValue));
              }}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.model || ""}
              components={{ Option }}
              value={tv1}
              onChange={(value) => value && setTv1(value)}
            />
          </Box>
        </VStack>
        <Text fontSize="4xl" color="red.700" fontWeight="extrabold">
          vs
        </Text>
        <VStack flex="1" maxWidth="400px">
          <SearchItem
            slug={tv2.slug || ""}
            score={tv2.score || 0}
            brand={tv2.brand}
            model={tv2.model}
            ean={tv2.ean}
            serie={tv2.serie}
            fullName={`${tv2.brand} ${tv2.model}`}
            picture={getPicture(tv2)}
            price={tv2.price}
            imageTechnology={tv2.imageTechnology}
            resolution={{
              resolution: tv2.resolution,
              alternativeName: tv2.resolutionAlt,
            }}
            releaseDate={tv2.releaseDate}
            screenSize={tv2.screenSize}
          />
          <Box width="100%">
            <AsyncSelect<FuzzySearch>
              name="tv2"
              colorScheme="gray"
              placeholder="Selecciona una TV"
              loadOptions={(inputValue, callback) => {
                callback(handleSearch(inputValue));
              }}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.model || ""}
              components={{ Option }}
              value={tv2}
              onChange={(value) => value && setTv2(value)}
            />
          </Box>
        </VStack>
      </VStack>
      <Link href={`vs/${tv1.slug}-vs-${tv2.slug}`} passHref>
        <Button
          as="a"
          alignSelf="center"
          colorScheme="gray"
          backgroundColor="red.700"
          color="white"
          width="300px"
          _hover={{
            backgroundColor: "red.900",
          }}
        >
          Comparar
        </Button>
      </Link>
    </Main>
  );
};

export default ComparePage;
