import { GetServerSideProps } from "next";
import { SearchTV } from "../models/search-tv";
import { Brand } from "../models/brand";
import { ImageTechnology } from "../models/image-technology";
import searchSales from "../graphql/search-sales";
import getSearchFilters from "../helpers/search/get-search-filters";
import SearchTemplate from "../components/search/template";

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

  const { data: sales, meta } = await searchSales({
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
      tvs: sales?.map((sale) => ({
        ...sale?.tv?.data?.attributes,
        id: sale.id,
        sale: {
          price: sale.price,
          basePrice: sale?.basePrice,
          relativeDiscount: sale.relativeDiscount,
          absoluteDiscount: sale.absoluteDiscount,
          affiliateUrl: sale.affiliateUrl,
        },
      })),
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
  brands: Brand[];
  brand: Brand["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
}) => {
  return (
    <SearchTemplate
      title="Las mejores ofertas."
      tvs={tvs}
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      brands={brands}
      brand={brand}
      imageTechnologies={imageTechnologies}
      imageTechnology={imageTechnology}
      prices={prices}
    />
  );
};

export default SearchSalesPage;
