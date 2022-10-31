import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";

import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import { GetStaticProps } from "next";
import { FuzzySearch, getPicture } from "../models/fuzzy-search-tv";
import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { AsyncSelect, components, OptionProps } from "chakra-react-select";
import SearchItem from "../components/search/item";

export const getStaticProps: GetStaticProps = async () => {
  const tvs = await getFuzzySearch();

  return {
    props: {
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
        {props.data.resolution && (
          <Tag colorScheme="gray">
            <TagLabel>{props.data.resolution}</TagLabel>
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
  const fuse = useMemo(() => {
    return new Fuse<FuzzySearch>(tvs, {
      keys: ["ean", "brand", "serie", "model"],
    });
  }, [tvs]);

  const [tv1, setTv1] = useState<FuzzySearch>(tvs[0]);
  const [tv2, setTv2] = useState<FuzzySearch>(tvs[1]);

  const picture2 = useMemo(() => {
    return tv2 ? getPicture(tv2) : null;
  }, [tv2]);

  const handleSearch = (value: string) => {
    const searched = fuse.search(value, { limit: 10 });
    return searched.map((s) => s.item);
  };

  return (
    <Layout>
      <Main>
        <Heading color="red.700">Comparador.</Heading>
        <HStack
          gap="10"
          justifyContent="center"
          height="600px"
          alignItems="center"
        >
          <VStack flex="1" maxWidth="400px">
            <SearchItem
              key={tv1.slug}
              slug={tv1.slug || ""}
              score={tv1.score || 0}
              brand={tv1.brand}
              model={tv1.model}
              ean={tv1.ean}
              serie={tv1.serie}
              fullName={`${tv1.brand} ${tv1.model}`}
              picture={getPicture(tv1)}
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
              key={tv2.slug}
              slug={tv2.slug || ""}
              score={tv2.score || 0}
              brand={tv2.brand}
              model={tv2.model}
              ean={tv2.ean}
              serie={tv2.serie}
              fullName={`${tv2.brand} ${tv2.model}`}
              picture={getPicture(tv2)}
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
        </HStack>
      </Main>
    </Layout>
  );
};

export default ComparePage;
