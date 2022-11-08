import { Grid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import PageTitle from "../components/layout/page-title";
import SearchSaleItem from "../components/search/item/search-sale-item";
import SearchTvItem from "../components/search/item/search-tv-item";
import SectionTitle from "../components/section-title";
import Wizard from "../components/wizard/wizard";
import searchSales from "../graphql/search-sales";
import searchTvs from "../graphql/search-tvs";
import { buildPicture } from "../models/picture";
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const helpArticles = await getHelpArticlesProps();
  const { data: tvs } = await searchTvs({
    page: 1,
    offset: 3,
    sortBy: "hits:desc",
  });
  const { data: sales } = await searchSales({ page: 1, offset: 3 });

  // 1 hour
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  return {
    props: {
      tvs,
      sales,
      helpArticles,
    },
  };
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
      <div id="ssm_ctv_leaderboard_grids" />
      <SectionTitle
        mt="16"
        title="Televisiones con más interés"
        linkHref="tvs"
        linkText="Ver todas las televisiones"
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
      <div id="ssm_ctv_roba1_pdp" />
      <SectionTitle
        mt="16"
        title="Mejores ofertas"
        linkHref="sales"
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
            marketLogo={buildPicture(
              sale.marketplace?.data?.attributes?.logo.data?.attributes?.url ||
                ""
            )}
          />
        ))}
      </Grid>
    </Main>
  );
};

export default IndexPage;
