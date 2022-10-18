import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { SearchTvsQuery } from "../gql/graphql";

const searchTvs = async ({
  page,
  offset,
  brand,
  imageTechnology,
}: {
  page: number;
  offset: number;
  brand?: string;
  imageTechnology?: string;
}) => {
  const { data } = await apollo.query<SearchTvsQuery>({
    variables: { page, offset, brand, imageTechnology },
    query: gql`
      query SearchTvs(
        $page: Int!
        $offset: Int!
        $brand: ID
        $imageTechnology: ID
      ) {
        tvs(
          pagination: { page: $page, pageSize: $offset }
          sort: "score:desc"
          filters: {
            and: {
              general: { brand: { serie: { brand: { id: { eq: $brand } } } } }
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
            attributes {
              name
              slug
              score
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
