import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import SearchTvItem from "../components/search/item/search-tv-item";
import SearchTemplate from "../components/search/search-template";
import searchTvs from "../graphql/search-tvs";
import { BrandFilter } from "../models/brand-filter";
import { CableConnectionFilter } from "../models/cable-connections-filter";
import { ImageTechnology } from "../models/image-technology";
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
import getSearchFilters from "../server/search/get-search-filters";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const helpArticles = await getHelpArticlesProps();

  const {
    brands,
    imageTechnologies,
    prices,
    page,
    cableConnections,
    currentCableConnections,
    ...filters
  } = await getSearchFilters({ query });

  const topic = (query?.topic as string) || undefined;

  const { data: tvs, meta } = await searchTvs({
    ...filters,
    topic,
    page,
    cableConnections: currentCableConnections,
  });

  // 1 hour
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  return {
    props: {
      helpArticles,
      tvs,
      numberOfPages: meta?.pagination.pageCount,
      currentPage: page,
      brands,
      imageTechnologies,
      prices,
      cableConnections,
    },
  };
};

const SearchSalesPage = ({
  tvs,
  currentPage,
  numberOfPages,
  brands,
  imageTechnologies,
  prices,
  cableConnections,
}: {
  tvs: SearchTV[];
  currentPage: number;
  numberOfPages: number;
  brands: BrandFilter[];
  brand: BrandFilter["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
  cableConnections: CableConnectionFilter[];
  currentCableConnections: string | string[];
}) => {
  return (
    <>
      <GeneralHead slug="tvs" title="Los mejores televisores" />
      <SearchTemplate
        title="Los mejores televisores"
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        brands={brands}
        imageTechnologies={imageTechnologies}
        cableConnections={cableConnections}
        prices={prices}
        noResults={tvs.length === 0}
      >
        {tvs.map((tv) => (
          <SearchTvItem
            isComparable
            key={tv.id}
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
      </SearchTemplate>
    </>
  );
};

export default SearchSalesPage;
