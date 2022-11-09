import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import SearchSaleItem from "../components/search/item/search-sale-item";
import SearchTemplate from "../components/search/search-template";
import searchSales from "../graphql/search-sales";
import { BrandFilter } from "../models/brand-filter";
import { CableConnectionFilter } from "../models/cable-connections-filter";
import { ImageTechnology } from "../models/image-technology";
import { SearchSale } from "../models/search-sale";
import {
  getBrand,
  getFullName,
  getImageTechnology,
  getModel,
  getPicture,
  getReleaseDate,
  getResolution,
  getScreenSize,
} from "../models/search-tv";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";
import getSearchFilters from "../server/search/get-search-filters";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const helpArticles = await getHelpArticlesProps();

  const {
    page,
    brands,
    imageTechnologies,
    cableConnections,
    prices,
    currentCableConnections,
    ...filters
  } = await getSearchFilters({ query });

  const { data: sales, meta } = await searchSales({
    ...filters,
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
      sales,
      numberOfPages: meta?.pagination.pageCount,
      currentPage: page,
      brands,
      imageTechnologies,
      cableConnections,
      prices,
    },
  };
};

const SearchSalesPage = ({
  sales,
  currentPage,
  numberOfPages,
  brands,
  imageTechnologies,
  cableConnections,
  prices,
}: {
  sales: SearchSale[];
  currentPage: number;
  numberOfPages: number;
  brands: BrandFilter[];
  imageTechnologies: ImageTechnology[];
  cableConnections: CableConnectionFilter[];
  prices: { minPrice: number; maxPrice: number };
}) => {
  return (
    <>
      <GeneralHead slug="sales" title="Las mejores ofertas" />
      <SearchTemplate
        title="Las mejores ofertas"
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        brands={brands}
        imageTechnologies={imageTechnologies}
        cableConnections={cableConnections}
        prices={prices}
        noResults={sales.length === 0}
      >
        {sales.map((sale) => (
          <SearchSaleItem
            key={sale.id}
            slug={sale.tv.data.attributes.slug || ""}
            fullName={getFullName(sale.tv.data.attributes)}
            picture={getPicture(sale.tv.data.attributes)}
            score={sale.tv.data.attributes.score || 0}
            brand={getBrand(sale.tv.data.attributes)}
            imageTechnology={getImageTechnology(sale.tv.data.attributes)}
            model={getModel(sale.tv.data.attributes)}
            releaseDate={getReleaseDate(sale.tv.data.attributes)}
            resolutionIcon={getResolution(sale.tv.data.attributes)}
            screenSize={getScreenSize(sale.tv.data.attributes)}
            price={sale.price || 0}
            basePrice={sale.basePrice || 0}
            relativeDiscount={sale.relativeDiscount || 0}
            absoluteDiscount={sale.absoluteDiscount || 0}
            affiliateUrl={sale.affiliateUrl || ""}
            marketLogo={
              sale.marketplace?.data?.attributes?.logo.data?.attributes?.url ||
              ""
            }
          />
        ))}
      </SearchTemplate>
    </>
  );
};

export default SearchSalesPage;
