import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchTvFragment, SearchTvsQuery } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const searchTvs = async ({
  page,
  offset,
  sortBy = "score:desc,minPrice:desc",
  brand,
  cableConnections,
  imageTechnology,
  sizeGreatherThan,
  sizeLessThan,
  minPrice,
  maxPrice,
  minScore,
}: {
  page: number;
  offset: number;
  brand?: string[];
  cableConnections?: string[];
  imageTechnology?: string[];
  sizeGreatherThan?: number;
  sizeLessThan?: number;
  minPrice?: number;
  maxPrice?: number;
  minScore?: number;
  sortBy?: "score:desc,minPrice:desc" | "hits:desc";
}) => {
  const { data } = await apollo.query<SearchTvsQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
      sortBy,
      brand,
      cableConnections,
      imageTechnology,
      sizeGreatherThan,
      sizeLessThan,
      minPrice,
      maxPrice,
      minScore,
    },
    query: gql`
      query SearchTvs(
        $page: Int!
        $offset: Int!
        $sortBy: [String]!
        $brand: [ID]
        $cableConnections: [ID]
        $imageTechnology: [ID]
        $sizeGreatherThan: Float
        $sizeLessThan: Float
        $minPrice: Float
        $maxPrice: Float
        $minScore: Float
      ) {
        tvs(
          pagination: { page: $page, pageSize: $offset }
          sort: $sortBy
          filters: {
            and: {
              general: {
                and: {
                  screenSize: { gt: $sizeGreatherThan, lt: $sizeLessThan }
                  brand: { serie: { brand: { id: { in: $brand } } } }
                }
              }
              minPrice: { gte: $minPrice, lte: $maxPrice }
              score: { gte: $minScore }
              image: { technology: { image: { id: { in: $imageTechnology } } } }
              connections: {
                cable: { type: { id: { in: $cableConnections } } }
              }
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
