import { useEffect } from "react";
import TvProvider from "../../components/tv/tvs-provider";
import Comparator from "../../components/comparator/comparator";
import Navbar from "../../components/comparator/navbar";
import SerieSection from "../../components/tv/serie/serie";
import Main from "../../components/layout/main";
import Summary from "../../components/tv/summary/summary";
import { GetStaticProps } from "next";
import getTv from "../../graphql/get-tv";
import { getComparatives, getReviews, TV } from "../../models/tv";
import getTvSeries from "../../graphql/get-tv-series";
import { TVSeries } from "../../models/tv-serie";
import TVHead from "../../components/tv/head";
import PricesSection from "../../components/tv/prices/prices";
import getMarketplaceTvs from "../../graphql/get-marketplaces-tv";
import ReviewsSection from "../../components/tv/reviews/reviews";
import getHelpArticlesProps from "../../server/help-articles/get-help-articles-props";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const helpArticles = await getHelpArticlesProps();
  const tv = await getTv({ slug: params?.slug as string });
  const tvSeries = await getTvSeries({
    serieId: tv?.general?.brand?.serie?.data?.id || "-1",
  });

  const marketplaceTvs = await getMarketplaceTvs({ tvId: tv.id || "" });

  return {
    props: {
      helpArticles,
      tv,
      tvSeries,
      offerCount: marketplaceTvs?.length || 0,
      tvId: tv.id,
    },
    revalidate: 7 * 24 * 60 * 60, // 1 week
  };
};

const TVPage = ({
  tv,
  tvSeries,
  tvId,
  offerCount,
}: {
  tv: TV;
  tvSeries: TVSeries;
  tvId: string;
  offerCount: number;
}) => {
  useEffect(() => {
    const hitReference = setTimeout(() => {
      fetch(`/api/hit`, {
        method: "POST",
        body: JSON.stringify({ tvid: tvId }),
      });
    }, 3000);

    return () => {
      clearTimeout(hitReference);
    };
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
      </Main>
    </TvProvider>
  );
};

export default TVPage;
