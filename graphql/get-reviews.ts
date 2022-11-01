import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetReviewsQuery } from "../gql/graphql";

const getReviews = async ({
  page,
  offset,
}: {
  page: number;
  offset: number;
}) => {
  const { data } = await apollo.query<GetReviewsQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
    },
    query: gql`
      query GetReviews($page: Int!, $offset: Int!) {
        externalSites(
          pagination: { page: $page, pageSize: $offset }
          sort: "createdAt:desc"
        ) {
          meta {
            pagination {
              pageCount
            }
          }
          data {
            attributes {
              title
              image
              siteName
              url
              video
            }
          }
        }
      }
    `,
  });

  return {
    meta: data.externalSites?.meta,
    data: data.externalSites?.data.map((tv) => tv.attributes),
  };
};
export default getReviews;
