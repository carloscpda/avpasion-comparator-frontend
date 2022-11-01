import {
  Box,
  Grid,
  GridItem,
  Heading,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import Paginator from "../components/search/paginator";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { GetServerSideProps } from "next";
import getReviews from "../graphql/get-reviews";
import { Review } from "../models/review";
import Image from "next/image";
import Link from "next/link";

const REVIEWS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const currentPage = parseInt(query?.page as string) || 1;

  const reviews = await getReviews({
    page: currentPage,
    offset: REVIEWS_PER_PAGE,
  });

  return {
    props: {
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

  const handleNavigate = useCallback(
    (page: number) => {
      router.query.page = page.toString();
      router.push(router);
    },
    [router]
  );

  return (
    <Layout>
      <Main>
        <Heading>Todas las reviews.</Heading>
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
            <Link key={review.url} href={review.url} passHref>
              <GridItem
                as="a"
                target="_blank"
                borderRadius={4}
                overflow="hidden"
                transition="all 0.1s"
                position="relative"
                _hover={{
                  transform: "scale(1.02)",
                }}
              >
                <Image
                  src={review.image || ""}
                  alt={review.title || ""}
                  unoptimized
                  width={400}
                  height={300}
                  objectFit="cover"
                />
                <Box
                  width="100%"
                  height="100%"
                  position="absolute"
                  top="0"
                  bgGradient="linear(to-t,  blackAlpha.900, blackAlpha.700, transparent, transparent)"
                />
                <Box
                  px="4"
                  py="2"
                  position="absolute"
                  top="0"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  p={4}
                >
                  <Tag
                    bg="red.700"
                    color="white"
                    width="min-content"
                    size="sm"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    <TagLabel>{review.siteName}</TagLabel>
                  </Tag>
                  <Text fontWeight="bold" color="white">
                    {review.title}
                  </Text>
                </Box>
              </GridItem>
            </Link>
          ))}
        </Grid>
        <Paginator
          currentPage={currentPage}
          totalPages={numberOfPages}
          onNavigate={handleNavigate}
        />
      </Main>
    </Layout>
  );
};

export default ReviewsPage;
