import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import SearchSaleItem from "../components/search/item/search-sale-item";
import SearchTemplate from "../components/search/search-template";
import RedisClient from "../infra/redis-client";
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
import HelpArticlesRepository from "../server/help-articles/help-articles.repository";
import getSearchFilters from "../server/search/get-search-filters";
import searchSales from "../server/search/search-sales";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
  resolvedUrl,
}) => {
  const redis = RedisClient.getInstance();

  const cacheData = await redis.get(resolvedUrl);
  let data = null;

  if (cacheData) {
    data = JSON.parse(cacheData);
  } else {
    const helpArticles = await HelpArticlesRepository.get();

    const {
      page,
      brands,
      imageTechnologies,
      cableConnections,
      prices,
      currentCableConnections,
      ...filters
    } = await getSearchFilters({ query });

    const { sales, meta } = await searchSales({
      ...filters,
      page,
      cableConnections: currentCableConnections,
    });

    data = {
      helpArticles,
      sales,
      numberOfPages: meta?.pagination.pageCount,
      currentPage: page,
      brands,
      imageTechnologies,
      cableConnections,
      prices,
    };

    redis.set(resolvedUrl, JSON.stringify(data), {
      EX: 3600,
    });
  }

  return { props: { ...data } };
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
      <GeneralHead slug="ofertas" title="Las mejores ofertas" />
      <SearchTemplate
        title="Mejores ofertas en televisores"
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
            slug={sale.tv.slug || ""}
            fullName={getFullName(sale.tv)}
            picture={getPicture(sale.tv)}
            score={sale.tv.score || 0}
            brand={getBrand(sale.tv)}
            imageTechnology={getImageTechnology(sale.tv)}
            model={getModel(sale.tv)}
            releaseDate={getReleaseDate(sale.tv)}
            resolutionIcon={getResolution(sale.tv)}
            screenSize={getScreenSize(sale.tv)}
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
