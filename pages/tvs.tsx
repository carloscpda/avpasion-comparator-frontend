import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import SearchTvItem from "../components/search/item/search-tv-item";
import SearchTemplate from "../components/search/search-template";
import searchTvs from "../graphql/search-tvs";
import { BrandFilter } from "../models/brand-filter";
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
  getSerie,
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
    offset,
    brand,
    imageTechnology,
    sizeGreatherThan,
    sizeLessThan,
    minPrice,
    maxPrice,
    minScore,
    maxScore,
  } = await getSearchFilters({ query });

  const { data: tvs, meta } = await searchTvs({
    page,
    offset,
    brand,
    imageTechnology,
    sizeGreatherThan,
    sizeLessThan,
    minPrice,
    maxPrice,
    minScore,
    maxScore,
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
      brand: brand || null,
      imageTechnologies,
      imageTechnology: imageTechnology || null,
      prices,
    },
  };
};

const SearchSalesPage = ({
  tvs,
  currentPage,
  numberOfPages,
  brands,
  brand,
  imageTechnologies,
  imageTechnology,
  prices,
}: {
  tvs: SearchTV[];
  currentPage: number;
  numberOfPages: number;
  brands: BrandFilter[];
  brand: BrandFilter["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
}) => {
  return (
    <>
      <GeneralHead slug="tvs" title="Los mejores televisores" />
      <SearchTemplate
        title="Los mejores televisores"
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        brands={brands}
        brand={brand}
        imageTechnologies={imageTechnologies}
        imageTechnology={imageTechnology}
        prices={prices}
        noResults={tvs.length === 0}
      >
        {tvs.map((tv) => (
          <SearchTvItem
            key={tv.id}
            slug={tv.slug || ""}
            fullName={getFullName(tv)}
            picture={getPicture(tv)}
            score={tv.score || 0}
            brand={getBrand(tv)}
            ean={tv.ean}
            imageTechnology={getImageTechnology(tv)}
            model={getModel(tv)}
            releaseDate={getReleaseDate(tv)}
            resolution={getResolution(tv)}
            screenSize={getScreenSize(tv)}
            serie={getSerie(tv)}
            price={tv.minPrice || 0}
          />
        ))}
      </SearchTemplate>
    </>
  );
};

export default SearchSalesPage;
