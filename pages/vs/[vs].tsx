import TvProvider from "../../components/tv/tvs-provider";
import Comparator from "../../components/comparator/comparator";
import Navbar from "../../components/comparator/navbar";
import Layout from "../../components/layout/layout";
import Main from "../../components/layout/main";
import { GetStaticProps } from "next";
import getTv from "../../graphql/get-tv";
import { TV } from "../../models/tv";
import ComparatorHero from "../../components/comparator/hero";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [tv1Slug, tv2Slug] = (params?.vs as string).split("--vs--");

  if (tv1Slug === tv2Slug) {
    return { notFound: true };
  }

  const tv1 = await getTv({ slug: tv1Slug });
  const tv2 = await getTv({ slug: tv2Slug });

  return {
    props: { tvs: [tv1, tv2] },
  };
};

const ComparatorPage = ({ tvs }: { tvs: [TV, TV] }) => {
  return (
    <TvProvider value={tvs}>
      <Layout>
        <Navbar />
        <Main>
          <ComparatorHero />
          <Comparator />
        </Main>
      </Layout>
    </TvProvider>
  );
};

export default ComparatorPage;
