import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchSalesQuery } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const searchSales = async ({
  page,
  offset,
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
}) => {
  const { data } = await apollo.query<SearchSalesQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
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
      ${SEARCH_TV}
      query SearchSales(
        $page: Int!
        $offset: Int!
        $brand: [ID]
        $imageTechnology: [ID]
        $cableConnections: [ID]
        $sizeGreatherThan: Float
        $sizeLessThan: Float
        $minPrice: Float
        $maxPrice: Float
        $minScore: Float
      ) {
        marketplaceTvs(
          pagination: { page: $page, pageSize: $offset }
          sort: "absoluteDiscount:desc"
          filters: {
            and: {
              price: { gt: 0 }
              absoluteDiscount: { gt: 0 }
              tv: {
                general: {
                  and: {
                    screenSize: { gt: $sizeGreatherThan, lt: $sizeLessThan }
                    brand: { serie: { brand: { id: { in: $brand } } } }
                  }
                }
                minPrice: { gte: $minPrice, lte: $maxPrice }
                score: { gte: $minScore }
                image: {
                  technology: { image: { id: { in: $imageTechnology } } }
                }
                connections: {
                  cable: { type: { id: { in: $cableConnections } } }
                }
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
              price
              basePrice
              absoluteDiscount
              relativeDiscount
              affiliateUrl
              marketplace {
                data {
                  attributes {
                    logo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
              tv {
                data {
                  attributes {
                    ...SearchTv
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    meta: data.marketplaceTvs?.meta,
    data: data.marketplaceTvs?.data.map((mktv) => ({
      ...mktv.attributes,
      id: mktv.id,
    })),
  };
};
export default searchSales;
