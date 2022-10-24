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
}: {
  page: number;
  offset: number;
  brand?: string;
  imageTechnology?: string;
  sizeGreatherThan?: number;
  sizeLessThan?: number;
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
    },
    query: gql`
      query SearchTvs(
        $page: Int!
        $offset: Int!
        $brand: ID
        $imageTechnology: ID
        $sizeGreatherThan: Float
        $sizeLessThan: Float
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
