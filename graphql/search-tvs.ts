import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import {
  SearchTvFragment,
  SearchTvsQuery,
  TvFiltersInput,
} from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const searchTvs = async ({
  page,
  offset,
  sortBy = "general.releaseDate:desc,score:desc,minPrice:desc",
  brand,
  cableConnections = [],
  imageTechnology,
  sizeGreatherThan,
  sizeLessThan,
  minPrice,
  maxPrice,
  minScore,
  imageScore,
  topic,
}: {
  page: number;
  offset: number;
  brand?: string[];
  cableConnections?: string | string[];
  imageTechnology?: string[];
  sizeGreatherThan?: number;
  sizeLessThan?: number;
  minPrice?: number;
  maxPrice?: number;
  minScore?: number;
  imageScore?: number;
  topic?: string;
  sortBy?: "general.releaseDate:desc,score:desc,minPrice:desc" | "hits:desc";
}) => {
  const sanitazedCableConnections =
    typeof cableConnections === "string"
      ? [cableConnections]
      : cableConnections;

  const filters: TvFiltersInput = {
    and: [
      {
        general: {
          screenSize: { gt: sizeGreatherThan, lt: sizeLessThan },
          brand: { serie: { brand: { id: { in: brand } } } },
        },
      },
      { minPrice: { gte: minPrice, lte: maxPrice } },
      { score: { gte: minScore } },
      {
        image: {
          score: { gte: imageScore },
          technology: { image: { id: { in: imageTechnology } } },
        },
      },

      ...(sanitazedCableConnections.map((c) => ({
        connections: {
          cable: {
            type: {
              id: { eq: c },
            },
          },
        },
      })) || []),

      ...(topic === "cine"
        ? [
            {
              or: [
                { image: { technology: { image: { id: { eq: "1" } } } } }, // OLED
                { image: { technology: { panel: { id: { eq: "3" } } } } }, // VA
              ],
            },
          ]
        : []),

      ...(topic === "games"
        ? [
            {
              and: [
                { connections: { cable: { type: { id: { eq: "15" } } } } }, // HDMI 2.1
                {
                  image: {
                    responseTimes: { gaming: { id: { in: ["5", "8"] } } }, // Game Mode or VRR
                  },
                },
                { image: { responseTimes: { inputLag60: { lt: 12 } } } }, // InputLag60 < 12
              ],
            },
          ]
        : []),
    ],
  };

  const { data } = await ApolloClient.getClient().query<SearchTvsQuery>({
    variables: {
      page,
      offset,
      sortBy,
      filters,
    },
    query: gql`
      query SearchTvs(
        $page: Int!
        $offset: Int!
        $sortBy: [String]!
        $filters: TvFiltersInput
      ) {
        tvs(
          pagination: { page: $page, pageSize: $offset }
          sort: $sortBy
          filters: $filters
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
