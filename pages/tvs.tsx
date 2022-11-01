import { GetServerSideProps } from "next";
import { SearchTV } from "../models/search-tv";
import { BrandFilter } from "../models/brand-filter";
import { ImageTechnology } from "../models/image-technology";
import getSearchFilters from "../helpers/search/get-search-filters";
import SearchTemplate from "../components/search/search-template";
import searchTvs from "../graphql/search-tvs";
import SearchTvItem from "../components/search/item/search-tv-item";
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
} from "../models/search-tv";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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

  return {
    props: {
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
    <SearchTemplate
      title="Los mejores televisores."
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
  );
};

export default SearchSalesPage;
