import TvProvider from "../../components/tv/tvs-provider";
import Comparator from "../../components/comparator/comparator";
import Navbar from "../../components/comparator/navbar";
import SerieSection from "../../components/tv/serie/serie";
import Layout from "../../components/layout/layout";
import Main from "../../components/layout/main";
import Summary from "../../components/tv/summary/summary";
import getTvSlugs from "../../graphql/get-tv-slugs";
import { GetStaticProps } from "next";
import getTv from "../../graphql/get-tv";
import { TV } from "../../models/tv";
import getTvSeries from "../../graphql/get-tv-series";
import { TVSeries } from "../../models/tv-serie";
import { Box, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import TVHead from "../../components/tv/head";
import PricesSection from "../../components/tv/prices/prices";
import getMarketplaceTvs from "../../graphql/get-marketplaces-tv";
import { MarketplaceTv } from "../../gql/graphql";

export const getStaticPaths = async () => {
  const slugs = await getTvSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tv = await getTv({ slug: params?.slug as string });
  const tvSeries = await getTvSeries({
    serieId: tv?.general?.brand?.serie?.data?.id || "-1",
  });
  const marketplaceTvs = await getMarketplaceTvs({ tvId: tv.id || "" });

  return {
    props: { tv, tvSeries, marketplaceTvs },
  };
};

const TVPage = ({
  tv,
  tvSeries,
  marketplaceTvs,
}: {
  tv: TV;
  tvSeries: TVSeries;
  marketplaceTvs: MarketplaceTv[];
}) => {
  return (
    <Layout>
      <TvProvider value={[tv]}>
        <TVHead />
        <Navbar />
        <Main>
          <Summary />
          <PricesSection marketplaceTvs={marketplaceTvs} />
          <SerieSection tvs={tvSeries} />
          <Comparator />
        </Main>
      </TvProvider>
    </Layout>
  );
};

export default TVPage;
