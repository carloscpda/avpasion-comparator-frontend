import { Grid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { createClient } from "redis";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import PageTitle from "../components/layout/page-title";
import SearchSaleItem from "../components/search/item/search-sale-item";
import SearchTvItem from "../components/search/item/search-tv-item";
import SectionTitle from "../components/section-title";
import Wizard from "../components/wizard/wizard";
import searchSales from "../graphql/search-sales";
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
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";
import searchTvs from "../server/search/search-tvs";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const redis = createClient();
  await redis.connect();
  const cacheData = await redis.get("home");
  let data = null;

  if (cacheData) {
    data = JSON.parse(cacheData);
  } else {
    const helpArticles = await getHelpArticlesProps();
    const { tvs } = await searchTvs({
      page: 1,
      offset: 3,
      sortBy: "hits:desc",
    });
    const { data: sales } = await searchSales({ page: 1, offset: 3 });

    data = {
      tvs,
      sales,
      helpArticles,
    };

    redis.set("home", JSON.stringify(data), {
      EX: 3600,
    });
  }

  // 1 hour
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

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
      </Grid>
    </Main>
  );
};

export default IndexPage;
