import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchTvFragment, SearchTvsQuery } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const searchTvs = async ({
  page,
  offset,
  sortBy = "score:desc,minPrice:desc",
  brand,
  imageTechnology,
  sizeGreatherThan,
  sizeLessThan,
  minPrice,
  maxPrice,
  minScore,
  maxScore,
}: {
  page: number;
  offset: number;
  brand?: string;
  imageTechnology?: string;
  sizeGreatherThan?: number;
  sizeLessThan?: number;
  minPrice?: number;
  maxPrice?: number;
  minScore?: number;
  maxScore?: number;
  sortBy?: "score:desc,minPrice:desc" | "hits:desc";
}) => {
  const { data } = await apollo.query<SearchTvsQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
      sortBy,
      brand,
      imageTechnology,
      sizeGreatherThan,
      sizeLessThan,
      minPrice,
      maxPrice,
      minScore,
      maxScore,
    },
    query: gql`
      query SearchTvs(
        $page: Int!
        $offset: Int!
        $sortBy: [String]!
        $brand: ID
        $imageTechnology: ID
        $sizeGreatherThan: Float
        $sizeLessThan: Float
        $minPrice: Float
        $maxPrice: Float
        $minScore: Float
        $maxScore: Float
      ) {
        tvs(
          pagination: { page: $page, pageSize: $offset }
          sort: $sortBy
          filters: {
            and: {
              general: {
                and: {
                  screenSize: { gt: $sizeGreatherThan, lt: $sizeLessThan }
                  brand: { serie: { brand: { id: { eq: $brand } } } }
                }
              }
              minPrice: { gte: $minPrice, lte: $maxPrice }
              score: { gte: $minScore, lte: $maxScore }
              image: { technology: { image: { id: { eq: $imageTechnology } } } }
              # connections: { cable: { type: { name: { eq: "HDMI 2.1" } } } }
            }
          }
        ) {
          meta {
            pagination {
              pageCount
            }
          }
          data {
            id
            attributes {
              ...SearchTv
            }
          }
        }
      }
      ${SEARCH_TV}
    `,
  });

  return {
    meta: data.tvs?.meta,
    data: data.tvs?.data.map((tv) => ({
      ...(tv.attributes as unknown as SearchTvFragment),
      id: tv.id,
    })),
  };
};
export default searchTvs;
