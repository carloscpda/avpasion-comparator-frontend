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
import getScoreWeighting from "../../graphql/get-score-weighting";
import { ScoreWeighting } from "../../models/score-weighting";
import ScoreWeightingProvider from "../../components/tv/score-weighting-provider";
import getTvSeries from "../../graphql/get-tv-series";
import { TVSeries } from "../../models/tv-serie";

export const getStaticPaths = async () => {
  const slugs = await getTvSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const scoreWeighting = await getScoreWeighting();
  const tv = await getTv({ slug: params?.slug as string });
  const tvSeries = await getTvSeries({
    serieId: tv?.general?.brand?.serie?.data?.id || "-1",
  });

  return {
    props: { tv, tvSeries, scoreWeighting },
  };
};

const TVPage = ({
  tv,
  scoreWeighting,
  tvSeries,
}: {
  tv: TV;
  scoreWeighting: ScoreWeighting;
  tvSeries: TVSeries;
}) => {
  return (
    <Layout>
      <ScoreWeightingProvider value={scoreWeighting}>
        <TvProvider value={[tv]}>
          <Navbar />
          <Main>
            <Summary />
            <SerieSection tvs={tvSeries} />
            <Comparator />
          </Main>
        </TvProvider>
      </ScoreWeightingProvider>
    </Layout>
  );
};

export default TVPage;
