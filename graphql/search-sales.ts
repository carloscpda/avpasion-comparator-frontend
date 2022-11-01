import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchSalesQuery } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const searchSales = async ({
  page,
  offset,
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
}) => {
  const { data } = await apollo.query<SearchSalesQuery>({
    fetchPolicy: "network-only",
    variables: {
      page,
      offset,
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
      ${SEARCH_TV}
      query SearchSales(
        $page: Int!
        $offset: Int!
        $brand: ID
        $imageTechnology: ID
        $sizeGreatherThan: Float
        $sizeLessThan: Float
        $minPrice: Float
        $maxPrice: Float
        $minScore: Float
        $maxScore: Float
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
                    brand: { serie: { brand: { id: { eq: $brand } } } }
                  }
                }
                minPrice: { gte: $minPrice, lte: $maxPrice }
                score: { gte: $minScore, lte: $maxScore }
                image: {
                  technology: { image: { id: { eq: $imageTechnology } } }
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
