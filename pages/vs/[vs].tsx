import TvProvider from "../../components/tv/tvs-provider";
import Comparator from "../../components/comparator/comparator";
import Navbar from "../../components/comparator/navbar";
import Layout from "../../components/layout/layout";
import Main from "../../components/layout/main";
import { GetStaticProps } from "next";
import getTv from "../../graphql/get-tv";
import { TV } from "../../models/tv";
import getScoreWeighting from "../../graphql/get-score-weighting";
import { ScoreWeighting } from "../../models/score-weighting";
import ScoreWeightingProvider from "../../components/tv/score-weighting-provider";
import ComparatorHero from "../../components/comparator/hero";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const scoreWeighting = await getScoreWeighting();
  const path = params?.vs;
  const [tv1Slug, tv2Slug] = (params?.vs as string).split("--vs--");

  if (tv1Slug === tv2Slug) {
    return { notFound: true };
  }

  const tv1 = await getTv({ slug: tv1Slug });
  const tv2 = await getTv({ slug: tv2Slug });

  return {
    props: { tvs: [tv1, tv2], scoreWeighting, tv2Slug, path },
  };
};

const TVPage = ({
  tvs,
  scoreWeighting,
}: {
  tvs: [TV, TV];
  scoreWeighting: ScoreWeighting;
}) => {
  return (
    <TvProvider value={tvs}>
      <Layout>
        <ScoreWeightingProvider value={scoreWeighting}>
          <Navbar />
          <Main>
            <ComparatorHero />
            <Comparator />
          </Main>
        </ScoreWeightingProvider>
      </Layout>
    </TvProvider>
  );
};

export default TVPage;
