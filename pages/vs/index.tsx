import {
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoTvOutline } from "react-icons/io5";
import Main from "../../components/layout/main";
import Layout from "../../components/layout/layout";
import { GetStaticProps } from "next";
import { FuzzySearch, getPicture } from "../../models/fuzzy-search-tv";
import getFuzzySearch from "../../graphql/get-fuzzy-search-tvs";
import Fuse from "fuse.js";
import { ChangeEventHandler, useMemo, useState } from "react";
import { useRouter } from "next/router";
import SearchItem from "../../components/search/item";
import NextLink from "next/link";

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
          <Grid
            flex="1"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            rowGap={16}
            columnGap={4}
          >
            {searched.map(({ item: tv }) => (
              <NextLink
                key={tv.slug}
                href={`/vs/${router.query.tv}-vs-${tv.slug}`}
                passHref
              >
                <SearchItem
                  score={tv.score || 0}
                  brand={tv.brand}
                  model={tv.model}
                  ean={tv.ean}
                  serie={tv.serie}
                  fullName={`${tv.brand} ${tv.model}`}
                  picture={getPicture(tv)}
                />
              </NextLink>
            ))}
          </Grid>
        )}
      </Main>
    </Layout>
  );
};

export default VsPage;