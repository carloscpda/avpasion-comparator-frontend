import { Grid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import PageTitle from "../components/layout/page-title";
import SearchSaleItem from "../components/search/item/search-sale-item";
import SearchTvItem from "../components/search/item/search-tv-item";
import SectionTitle from "../components/section-title";
import Wizard from "../components/wizard/wizard";
import RedisClient from "../infra/redis-client";
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
  SearchTV,
} from "../models/search-tv";
import HelpArticlesRepository from "../server/help-articles/help-articles.repository";
import searchSales from "../server/search/search-sales";
import searchTvs from "../server/search/search-tvs";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const redis = RedisClient.getInstance();

  const cacheData = await redis.get("home");
  let data = null;

  if (cacheData) {
    data = JSON.parse(cacheData);
  } else {
    const helpArticles = await HelpArticlesRepository.get();
    const { tvs } = await searchTvs({
      page: 1,
      offset: 3,
      sortBy: "hits:desc",
    });
    const { sales } = await searchSales({ page: 1, offset: 3 });

    data = {
      tvs,
      sales,
      helpArticles,
    };

    redis.set("home", JSON.stringify(data), {
      EX: 3600,
    });
  }

  return { props: { ...data } };
};

const IndexPage = ({
  tvs,
  sales,
}: {
  tvs: SearchTV[];
  sales: SearchSale[];
}) => {
  return (
    <Main>
      <GeneralHead slug="" title="Inicio" />
      <PageTitle title="Encuentra tu televisor" />
      <Wizard />
      {/* <Ad id="ssm_ctv_leaderboard_grids" /> */}
      <SectionTitle
        mt="16"
        title="Smart TV con más interés"
        linkHref="/mejores-televisores"
        linkText="Ver todas los televisores"
      />
      <Grid
        flex="1"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        rowGap={16}
        columnGap={4}
        mb="4"
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
      </Grid>
      {/* <Ad id="ssm_ctv_roba1_pdp" /> */}
      <SectionTitle
        mt="16"
        title="Mejores ofertas"
        linkHref="ofertas"
        linkText="Ver todas las ofertas"
      />
      <Grid
        flex="1"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        rowGap={16}
        columnGap={4}
        mb="4"
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
      </Grid>
    </Main>
  );
};

export default IndexPage;
