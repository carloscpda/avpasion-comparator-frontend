import { GetServerSideProps } from "next";
import { BrandFilter } from "../models/brand-filter";
import { ImageTechnology } from "../models/image-technology";
import searchSales from "../graphql/search-sales";
import getSearchFilters from "../helpers/search/get-search-filters";
import SearchTemplate from "../components/search/search-template";
import SearchSaleItem from "../components/search/item/search-sale-item";
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
import { SearchSale } from "../models/search-sale";
import { buildPicture } from "../models/picture";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
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

  // 1 hour
  res.setHeader("Cache-Control", "public, s-maxage=3600");

  return {
    props: {
      sales,
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
  sales,
  currentPage,
  numberOfPages,
  brands,
  brand,
  imageTechnologies,
  imageTechnology,
  prices,
}: {
  sales: SearchSale[];
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
      title="Las mejores ofertas."
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      brands={brands}
      brand={brand}
      imageTechnologies={imageTechnologies}
      imageTechnology={imageTechnology}
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
          ean={sale.tv.data.attributes.ean}
          imageTechnology={getImageTechnology(sale.tv.data.attributes)}
          model={getModel(sale.tv.data.attributes)}
          releaseDate={getReleaseDate(sale.tv.data.attributes)}
          resolution={getResolution(sale.tv.data.attributes)}
          screenSize={getScreenSize(sale.tv.data.attributes)}
          serie={getSerie(sale.tv.data.attributes)}
          price={sale.price || 0}
          basePrice={sale.basePrice || 0}
          relativeDiscount={sale.relativeDiscount || 0}
          absoluteDiscount={sale.absoluteDiscount || 0}
          affiliateUrl={sale.affiliateUrl || ""}
          marketLogo={buildPicture(
            sale.marketplace?.data?.attributes?.logo.data?.attributes?.url || ""
          )}
        />
      ))}
    </SearchTemplate>
  );
};

export default SearchSalesPage;
