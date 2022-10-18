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
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

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

  return {
    props: { tv, tvSeries },
  };
};

const TVPage = ({ tv, tvSeries }: { tv: TV; tvSeries: TVSeries }) => {
  return (
    <Layout>
      <TvProvider value={[tv]}>
        <Navbar />
        <Main>
          <Summary />
          <SerieSection tvs={tvSeries} />
          <Box alignSelf="flex-end" mt="8">
            <Link href={`/vs?tv=${tv.slug}`} passHref>
              <Button size="lg" as="a" background="black">
                Comparar
              </Button>
            </Link>
          </Box>
          <Comparator />
        </Main>
      </TvProvider>
    </Layout>
  );
};

export default TVPage;
