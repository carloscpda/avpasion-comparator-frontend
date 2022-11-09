import {
  Box,
  Button,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AsyncSelect, components, OptionProps } from "chakra-react-select";
import Fuse from "fuse.js";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import PageTitle from "../components/layout/page-title";
import SearchTvItem from "../components/search/item/search-tv-item";
import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
import { buildPicture } from "../models/picture";

import {
  getBrand,
  getFullName,
  getImageTechnology,
  getModel,
  getPicture,
  getReleaseDate,
  getResolution,
  getScreenSize,
  SearchTV,
} from "../models/search-tv";
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

const Option = (props: OptionProps<SearchTV>) => {
  return (
    <components.Option {...props}>
      <HStack alignItems="center">
        <Box flex="1">
          <Text color="red.700" fontSize="xs" textTransform="uppercase">
            {
              props.data.general?.brand?.serie?.data?.attributes?.brand?.data
                ?.attributes?.name
            }
          </Text>
          <Text>{props.data.general?.brand?.model}</Text>
        </Box>
        {props.data.image?.resolution?.data?.attributes?.icon.data?.attributes
          ?.url && (
          <Image
            src={buildPicture(
              props.data.image?.resolution?.data?.attributes?.icon.data
                ?.attributes?.url,
              { width: 48 }
            )}
            alt="resolution"
            height="32"
            width="48"
            objectFit="contain"
          />
        )}

        {props.data.general?.screenSize && (
          <Tag
            variant="outline"
            colorScheme="black"
            bg="white"
            borderColor="black"
            borderWidth="2px"
            fontWeight="extrabold"
            borderRadius="sm"
          >
            <TagLabel>{`${props.data.general.screenSize}"`}</TagLabel>
          </Tag>
        )}
      </HStack>
    </components.Option>
  );
};

const ComparePage = ({ tvs }: { tvs: SearchTV[] }) => {
  const router = useRouter();
  const fuse = useMemo(() => {
    return new Fuse<SearchTV>(tvs, {
      threshold: 0,
      keys: [
        "ean",
        "general.brand.serie.data.attributes.brand.data.attributes.name",
        "general.brand.serie.data.attributes.name",
        "general.brand.model",
      ],
    });
  }, [tvs]);

  const [tv1, setTv1] = useState<SearchTV>(
    tvs.find((tv) => tv.slug === router.query.tv) || tvs[48]
  );
  const [tv2, setTv2] = useState<SearchTV>(tvs[1]);

  const handleSearch = (value: string) => {
    const searched = fuse.search(value, { limit: 10 });
    return searched.map((s) => s.item);
  };

  return (
    <Main>
      <GeneralHead slug="compare" title="Comparar" />
      <PageTitle title="Comparar" />
      <div id="ssm_ctv_leaderboard_grids" />
      <VStack
        flexDirection={{ base: "column", md: "row" }}
        height={{ md: "600px" }}
        mb={{ base: 10, md: 0 }}
        gap="10"
        justifyContent="center"
        alignItems="center"
      >
        <VStack flex="1" maxWidth="400px">
          <SearchTvItem
            key={tv1.id}
            slug={tv1.slug || ""}
            fullName={getFullName(tv1)}
            picture={getPicture(tv1)}
            score={tv1.score || 0}
            brand={getBrand(tv1)}
            imageTechnology={getImageTechnology(tv1)}
            model={getModel(tv1)}
            releaseDate={getReleaseDate(tv1)}
            resolutionIcon={getResolution(tv1)}
            screenSize={getScreenSize(tv1)}
            price={tv1.minPrice || 0}
          />
          <Box width="100%">
            <AsyncSelect<SearchTV>
              instanceId="tv1"
              name="tv1"
              colorScheme="gray"
              placeholder="Selecciona una TV"
              defaultOptions={handleSearch("oled")}
              loadOptions={(inputValue, callback) => {
                callback(handleSearch(inputValue));
              }}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.general?.brand?.model || ""}
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
          <SearchTvItem
            key={tv2.id}
            slug={tv2.slug || ""}
            fullName={getFullName(tv2)}
            picture={getPicture(tv2)}
            score={tv2.score || 0}
            brand={getBrand(tv2)}
            imageTechnology={getImageTechnology(tv2)}
            model={getModel(tv2)}
            releaseDate={getReleaseDate(tv2)}
            resolutionIcon={getResolution(tv2)}
            screenSize={getScreenSize(tv2)}
            price={tv2.minPrice || 0}
          />
          <Box width="100%">
            <AsyncSelect<SearchTV>
              instanceId="tv2"
              name="tv2"
              colorScheme="gray"
              placeholder="Selecciona una TV"
              loadOptions={(inputValue, callback) => {
                callback(handleSearch(inputValue));
              }}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.general?.brand?.model || ""}
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
