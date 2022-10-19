import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { IoTvOutline } from "react-icons/io5";
import Main from "../../components/layout/main";
import Layout from "../../components/layout/layout";
import { GetStaticProps } from "next";
import { FuzzySearch } from "../../models/fuzzy-search-tv";
import getFuzzySearch from "../../graphql/get-fuzzy-search-tvs";
import Fuse from "fuse.js";
import { ChangeEventHandler, useMemo, useState } from "react";
import { useRouter } from "next/router";
import TvTitle from "../../components/tv/basics/title";
import Score from "../../components/score";
import TvEan from "../../components/tv/basics/ean";
import TvSerie from "../../components/tv/basics/serie";
import SearchRow from "../../components/search/row";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tvs = await getFuzzySearch();

  return {
    props: {
      tvs,
    },
  };
};

const VsPage = ({ tvs }: { tvs: FuzzySearch[] }) => {
  const router = useRouter();
  const [searched, search] = useState<Fuse.FuseResult<FuzzySearch>[]>([]);

  const fuse = useMemo(() => {
    return new Fuse<FuzzySearch>(tvs, {
      keys: ["ean", "brand", "serie", "model"],
    });
  }, [tvs]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    search(fuse.search(event.target.value));
  };

  return (
    <Layout>
      <Main>
        <Heading hidden>Comparator</Heading>
        <InputGroup mt="4" mb="8">
          <InputLeftElement
            pointerEvents="none"
            fontSize="xl"
            color="gray.500"
            mt="1"
          >
            <IoTvOutline />
          </InputLeftElement>
          <Input
            name="search"
            onChange={handleSearch}
            placeholder="Busca por modelo, serie, marca o EAN"
            size="lg"
            autoFocus
          />
        </InputGroup>
        {!!searched.length && (
          <VStack width="100%">
            {searched.map((tv) => (
              <SearchRow
                href={`/vs/${router.query.tv}-vs-${tv.item.slug}`}
                key={tv.item.slug}
              >
                <Score value={tv.item.score} size={50} />
                <Box flex="1">
                  <TvTitle
                    brand={tv.item.brand}
                    model={tv.item.model}
                    size="md"
                    captionSize="sm"
                  />
                </Box>
                <Box flex="2">
                  <TvSerie value={tv.item.serie} />
                  <TvEan value={tv.item.ean} />
                </Box>
              </SearchRow>
            ))}
          </VStack>
        )}
      </Main>
    </Layout>
  );
};

export default VsPage;
