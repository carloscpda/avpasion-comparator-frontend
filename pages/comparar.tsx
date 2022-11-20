import {
  Box,
  Button,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AsyncSelect,
  components,
  OptionProps,
  SingleValueProps,
} from "chakra-react-select";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import useFuzzySearch from "../components/fuzzy-search/use-fuzzy-search";
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
import { getAllHelpArticlesSections } from "../server/help-articles-sections/help-articles-sections.use-cases";

export const getStaticProps: GetStaticProps = async () => {
  const helpArticles = await getAllHelpArticlesSections();
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
            height="32px"
            width="48px"
            objectFit="contain"
          />
        )}

        {props.data.general?.screenSize && (
          <Tag
            variant="outline"
            colorScheme="black"
            bg="white"
            borderColor="black"
            color="black"
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

function SingleValue(props: SingleValueProps<SearchTV>) {
  const { children, ...rest } = props;
  const { selectProps } = props;
  if (selectProps.menuIsOpen) return <Fragment></Fragment>;
  return <components.SingleValue {...rest}>{children}</components.SingleValue>;
}

const ComparePage = ({ tvs }: { tvs: SearchTV[] }) => {
  const router = useRouter();
  const search = useFuzzySearch(tvs);

  const [tv1, setTv1] = useState<SearchTV>();
  const [tv2, setTv2] = useState<SearchTV>();

  useEffect(() => {
    if (router.query.tv) {
      setTv1(tvs.find((tv) => tv.slug === router.query.tv));
    }
  }, [router.query.tv, tvs]);

  return (
    <Main>
      <GeneralHead slug="comparar" title="Comparar televisores" />
      <PageTitle title="Comparar televisores" />
      {/* <Ad id="ssm_ctv_leaderboard_grids" /> */}
      <VStack
        flexDirection={{ base: "column", md: "row" }}
        marginY={{ base: "3", md: "10" }}
        gap={{ md: "10" }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack flex="1" maxWidth="400px" width="100%">
          {tv1 && (
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
          )}
          <Box width="100%">
            <AsyncSelect<SearchTV>
              instanceId="tv1"
              name="tv1"
              colorScheme="gray"
              placeholder="Busca por modelo o EAN"
              noOptionsMessage={() => "Sin resultados"}
              loadOptions={(input, callback) => {
                callback(search(input));
              }}
              defaultOptions={search(
                tv1?.general?.brand?.serie?.data?.attributes?.name || ""
              )}
              openMenuOnFocus={false}
              openMenuOnClick={false}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.general?.brand?.model || ""}
              components={{ SingleValue, Option }}
              value={tv1}
              onChange={(value) => value && setTv1(value)}
            />
          </Box>
        </VStack>
        <Text fontSize="4xl" color="red.700" fontWeight="extrabold">
          vs
        </Text>
        <VStack flex="1" maxWidth="400px" width="100%">
          {tv2 && (
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
          )}
          <Box width="100%">
            <AsyncSelect<SearchTV>
              instanceId="tv2"
              name="tv2"
              colorScheme="gray"
              placeholder="Busca por modelo o EAN"
              noOptionsMessage={() => "Sin resultados"}
              openMenuOnFocus={false}
              openMenuOnClick={false}
              loadOptions={(inputValue, callback) => {
                callback(search(inputValue));
              }}
              getOptionValue={(opt) => opt?.ean || ""}
              getOptionLabel={(opt) => opt?.general?.brand?.model || ""}
              components={{ SingleValue, Option }}
              value={tv2}
              onChange={(value) => value && setTv2(value)}
            />
          </Box>
        </VStack>
      </VStack>
      <Button
        onClick={() => router.push(`vs/${tv1?.slug}-vs-${tv2?.slug}`)}
        alignSelf="center"
        colorScheme="gray"
        backgroundColor="red.700"
        color="white"
        width="300px"
        disabled={!tv1 || !tv2}
        _hover={{
          backgroundColor: "red.900",
        }}
      >
        Comparar
      </Button>
    </Main>
  );
};

export default ComparePage;
