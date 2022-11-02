import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetReviewsQuery } from "../gql/graphql";

const getReviews = async ({
  page,
  offset,
  type,
}: {
  page: number;
  offset: number;
  type?: string;
}) => {
  const { data } = await apollo.query<GetReviewsQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
      type,
    },
    query: gql`
      query GetReviews($page: Int!, $offset: Int!, $type: String) {
        externalSites(
          pagination: { page: $page, pageSize: $offset }
          sort: "createdAt:desc"
          filters: { type: { eq: $type, ne: "help-article" } }
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
              type
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
