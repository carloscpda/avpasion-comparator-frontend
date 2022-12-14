import { GetStaticProps } from "next";
import Comparator from "../../components/comparator/comparator";
import ComparatorHead from "../../components/comparator/head";
import ComparatorHero from "../../components/comparator/hero";
import Navbar from "../../components/comparator/navbar";
import Main from "../../components/layout/main";
import TvProvider from "../../components/tv/tvs-provider";
import getTv from "../../graphql/get-tv";
import { TV } from "../../models/tv";
import { getAllHelpArticlesSections } from "../../server/help-articles-sections/help-articles-sections.use-cases";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const helpArticles = await getAllHelpArticlesSections();
  const [tv1Slug, tv2Slug] = (params?.vs as string).split("-vs-");

  if (tv1Slug === tv2Slug) {
    return { notFound: true };
  }

  let tv1, tv2;

  try {
    tv1 = await getTv({ slug: tv1Slug });
    tv2 = await getTv({ slug: tv2Slug });
  } catch (error) {
    console.error(`vs/${tv1Slug}-vs${tv2Slug} - ${error}`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      helpArticles,
      tvs: [tv1, tv2],
    },
    revalidate: 7 * 24 * 60 * 60, // 1 week
  };
};

const ComparatorPage = ({ tvs }: { tvs: [TV, TV] }) => {
  return (
    <TvProvider value={tvs}>
      <ComparatorHead />
      <Navbar />
      <Main>
        <ComparatorHero />
        <Comparator />
      </Main>
    </TvProvider>
  );
};

export default ComparatorPage;
