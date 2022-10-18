import {
  Box,
  Heading,
  HStack,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import Main from "../../components/layout/main";
import Layout from "../../components/layout/layout";
import SummaryTitle from "../../components/tv/summary/title";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { MdCompare } from "react-icons/md";
import { FuzzySearch } from "../../models/fuzzy-search-tv";
import getFuzzySearch from "../../graphql/get-fuzzy-search-tvs";
import Fuse from "fuse.js";
import { ChangeEventHandler, useMemo, useState } from "react";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tvs = await getFuzzySearch();

  return {
    props: {
      tvs,
    },
  };
};

const VsPage = ({ tvs }: { tvs: FuzzySearch[] }) => {
  const [searched, search] = useState<Fuse.FuseResult<FuzzySearch>[]>([]);

  const fuse = useMemo(() => {
    return new Fuse<FuzzySearch>(tvs, {
      keys: ["ean", "name", "brand", "serie", "model"],
    });
  }, [tvs]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    search(fuse.search(event.target.value));
  };

  return (
    <Layout>
      <Main>
        <Heading hidden>TVs</Heading>
        <Input name="search" onChange={handleSearch} />
        <VStack flex="1">
          {searched.map((tv) => (
            <HStack
              key={tv.slug}
              borderBottom="1px"
              width="100%"
              borderColor="gray.100"
              py={2}
              px={4}
              gap={2}
            >
              <Box flex="1">{tv.item.slug}</Box>
              <NextLink href={`/tv/${tv.item.slug}`} passHref>
                <IconButton
                  as="a"
                  icon={<MdCompare />}
                  aria-label="Comparar"
                  colorScheme="red"
                  backgroundColor="red.700"
                />
              </NextLink>
            </HStack>
          ))}
        </VStack>
      </Main>
    </Layout>
  );
};

export default VsPage;
