import {
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { IoTvOutline } from "react-icons/io5";
import useFuzzySearch from "../components/fuzzy-search/use-fuzzy-search";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import SearchTvItem from "../components/search/item/search-tv-item";
import getFuzzySearch from "../graphql/get-fuzzy-search-tvs";
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

const SearchPage = ({ tvs }: { tvs: SearchTV[] }) => {
  const [searched, search] = useState<SearchTV[]>([]);

  const fuzzySearch = useFuzzySearch(tvs);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    search(fuzzySearch(event.target.value));
  };

  return (
    <Main>
      <GeneralHead slug="busqueda" title="Encuentra tu televisor" />
      <Heading>Encuentra tu televisor</Heading>
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
          gridTemplateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          rowGap={16}
          columnGap={4}
        >
          {searched.map((tv) => (
            <SearchTvItem
              isComparable
              key={tv.slug}
              slug={tv.slug || ""}
              fullName={getFullName(tv)}
              picture={getPicture(tv)}
              score={tv.score || 0}
              brand={getBrand(tv)}
              imageTechnology={getImageTechnology(tv)}
              model={getModel(tv)}
              releaseDate={getReleaseDate(tv)}
              resolutionIcon={getResolution(tv)}
              screenSize={getScreenSize(tv)}
              price={tv.minPrice || 0}
            />
          ))}
        </Grid>
      )}
    </Main>
  );
};

export default SearchPage;
