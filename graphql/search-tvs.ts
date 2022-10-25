import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchTvsQuery } from "../gql/graphql";

const searchTvs = async ({
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
  const { data } = await apollo.query<SearchTvsQuery>({
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
      query SearchTvs(
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
        tvs(
          pagination: { page: $page, pageSize: $offset }
          sort: "score:desc"
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
              name
              slug
              score
              ean
              minPrice
              maxPrice
              general {
                screenSize
                releaseDate
                brand {
                  model
                  serie {
                    data {
                      attributes {
                        name
                        brand {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              image {
                score
                resolution {
                  data {
                    attributes {
                      resolution
                      alternativeName
                    }
                  }
                }
                technology {
                  image {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
              sound {
                score
              }
              connections {
                score
              }
              design {
                score
                pictures {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              system {
                score
              }
            }
          }
        }
      }
    `,
  });

  return {
    meta: data.tvs?.meta,
    data: data.tvs?.data.map((tv) => tv.attributes),
  };
};
export default searchTvs;
