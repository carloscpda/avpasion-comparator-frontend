import { Button, Grid, Heading, HStack, Icon } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { MdCompare, MdOutlineReviews } from "react-icons/md";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import ReviewCard from "../components/reviews/review";
import Paginator from "../components/search/paginator";
import { Enum_Externalsite_Type } from "../gql/graphql";
import getReviews from "../graphql/get-reviews";
import { Review } from "../models/review";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";

const REVIEWS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const helpArticles = await getHelpArticlesProps();

  const currentPage = parseInt(query?.page as string) || 1;
  const type = query?.type ? query.type.toString() : undefined;

  const reviews = await getReviews({
    page: currentPage,
    offset: REVIEWS_PER_PAGE,
    type,
  });

  // 6 hours
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=21600, stale-while-revalidate=86400"
  );

  return {
    props: {
      helpArticles,
      reviews: reviews.data,
      currentPage,
      numberOfPages: reviews.meta?.pagination.pageCount,
    },
  };
};

const ReviewsPage = ({
  currentPage,
  numberOfPages,
  reviews,
}: {
  reviews: Review[];
  currentPage: number;
  numberOfPages: number;
}) => {
  const router = useRouter();
  const currentType = router.query.type?.toString();

  const handleNavigate = useCallback(
    (page: number) => {
      router.query.page = page.toString();
      router.push(router);
    },
    [router]
  );

  const handleChangeType = (type?: string) => {
    router.query.type = type;
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <Main>
      <GeneralHead slug="reviews" title="Reviews y comparativas" />
      <Heading>Todas las reviews</Heading>
      <HStack gap="1" mt="8" justifyContent="flex-end">
        <Button
          colorScheme="gray"
          disabled={!currentType}
          size="sm"
          onClick={() => handleChangeType()}
        >
          Todas
        </Button>
        <Button
          colorScheme="gray"
          disabled={currentType === Enum_Externalsite_Type.Review}
          size="sm"
          onClick={() => handleChangeType(Enum_Externalsite_Type.Review)}
        >
          <Icon as={MdOutlineReviews} mr="1" />
          Reviews
        </Button>
        <Button
          colorScheme="gray"
          disabled={currentType === Enum_Externalsite_Type.Comparative}
          size="sm"
          onClick={() => handleChangeType(Enum_Externalsite_Type.Comparative)}
        >
          <Icon as={MdCompare} mr="1" />
          Comparativas
        </Button>
      </HStack>
      <div id="ssm_ctv_leaderboard_grids" />
      <Grid
        flex="1"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gap={8}
        mb="4"
        mt="16"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.url} review={review} />
        ))}
      </Grid>
      <Paginator
        currentPage={currentPage}
        totalPages={numberOfPages}
        onNavigate={handleNavigate}
      />
    </Main>
  );
};

export default ReviewsPage;
