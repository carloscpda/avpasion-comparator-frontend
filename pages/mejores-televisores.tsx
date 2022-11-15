import { GetServerSideProps } from "next";

import GeneralHead from "../components/head";
import SearchTvItem from "../components/search/item/search-tv-item";
import SearchTemplate from "../components/search/search-template";
import RedisClient from "../infra/redis-client";
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
import { getAllHelpArticlesSections } from "../server/help-articles-sections/help-articles-sections.use-cases";
import getSearchFilters from "../server/search/get-search-filters";
import searchTvs from "../server/search/search-tvs";

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
    const helpArticles = await getAllHelpArticlesSections();

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

    const { tvs, meta } = await searchTvs({
      ...filters,
      topic,
      page,
      cableConnections: currentCableConnections,
    });

    data = {
      helpArticles,
      tvs,
      numberOfPages: meta?.pagination.pageCount,
      currentPage: page,
      brands,
      imageTechnologies,
      prices,
      cableConnections,
    };

    redis.set(resolvedUrl, JSON.stringify(data), {
      EX: 3600, // 1 hora
    });
  }

  return { props: { ...data } };
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
      {/* <Head></Head> */}
      <GeneralHead slug="mejores-televisores" title="Mejores televisores" />
      <SearchTemplate
        title="Mejores televisores"
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
