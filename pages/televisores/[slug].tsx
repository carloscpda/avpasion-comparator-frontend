import { GetStaticProps } from "next";
import { useEffect } from "react";
import Comparator from "../../components/comparator/comparator";
import Navbar from "../../components/comparator/navbar";
import Main from "../../components/layout/main";
import TVHead from "../../components/tv/head";
import PricesSection from "../../components/tv/prices/prices";
import ReviewsSection from "../../components/tv/reviews/reviews";
import SerieSection from "../../components/tv/serie/serie";
import SimilarTvs from "../../components/tv/similar-tvs/similar-tvs";
import Summary from "../../components/tv/summary/summary";
import TvProvider from "../../components/tv/tvs-provider";
import getMarketplaceTvs from "../../graphql/get-marketplaces-tv";
import getTv from "../../graphql/get-tv";
import getTvSeries from "../../graphql/get-tv-series";
import { getComparatives, getReviews, TV } from "../../models/tv";
import { TVSeries } from "../../models/tv-serie";
import { getAllHelpArticlesSections } from "../../server/help-articles-sections/help-articles-sections.use-cases";
import { TvDto } from "../../server/tvs/tv.dto";
import getSimilarTvs from "../../server/tvs/use-cases/get-similar-tvs";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const helpArticles = await getAllHelpArticlesSections();
  const tv = await getTv({ slug: params?.slug as string });
  const tvSeries = await getTvSeries({
    serieId: tv?.general?.brand?.serie?.data?.id || "-1",
  });

  const marketplaceTvs = await getMarketplaceTvs({ tvId: tv.id || "" });
  const similarTvs = await getSimilarTvs(tv.id as string);

  return {
    props: {
      helpArticles,
      tv,
      tvSeries,
      offerCount: marketplaceTvs?.length || 0,
      tvId: tv.id,
      similarTvs,
    },
    revalidate: 7 * 24 * 60 * 60, // 1 week
  };
};

const TVPage = ({
  tv,
  tvSeries,
  tvId,
  offerCount,
  similarTvs,
}: {
  tv: TV;
  tvSeries: TVSeries;
  tvId: string;
  offerCount: number;
  similarTvs: TvDto[];
}) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const hitReference = setTimeout(() => {
        fetch(`/api/hit`, {
          method: "POST",
          body: JSON.stringify({ tvid: tvId }),
        });
      }, 3000);

      return () => {
        clearTimeout(hitReference);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reviews = getReviews(tv);
  const comparatives = getComparatives(tv);

  return (
    <TvProvider value={[tv]}>
      <TVHead offerCount={offerCount} />
      <Navbar />
      <Main>
        <Summary />
        <PricesSection tvId={tvId} />
        <SerieSection tvs={tvSeries} />
        <Comparator />
        {!!reviews.length && (
          <ReviewsSection title="Reviews" reviews={reviews} />
        )}
        {!!comparatives.length && (
          <ReviewsSection title="Comparativas" reviews={comparatives} />
        )}
        <SimilarTvs tvs={similarTvs} />
      </Main>
    </TvProvider>
  );
};

export default TVPage;
