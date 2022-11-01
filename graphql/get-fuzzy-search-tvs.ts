import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetFuzzySearchQuery } from "../gql/graphql";

const getFuzzySearch = async () => {
  const { data } = await apollo.query<GetFuzzySearchQuery>({
    fetchPolicy: "network-only",
    query: gql`
      query GetFuzzySearch {
        tvs(pagination: { limit: -1 }) {
          data {
            attributes {
              ean
              slug
              score
              minPrice
              general {
                releaseDate
                screenSize
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
              design {
                pictures {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return (
    data.tvs?.data.map((tv) => ({
      ean: tv.attributes?.ean,
      slug: tv.attributes?.slug,
      score: tv.attributes?.score,
      brand:
        tv.attributes?.general?.brand?.serie?.data?.attributes?.brand?.data
          ?.attributes?.name,
      model: tv.attributes?.general?.brand?.model,
      serie: tv.attributes?.general?.brand?.serie?.data?.attributes?.name,
      pictures: tv.attributes?.design?.pictures?.data.map(
        (pic) => pic.attributes
      ),
      screenSize: tv.attributes?.general?.screenSize || 0,
      resolution:
        tv.attributes?.image?.resolution?.data?.attributes?.resolution || "",
      resolutionAlt:
        tv.attributes?.image?.resolution?.data?.attributes?.alternativeName ||
        "",
      price: tv.attributes?.minPrice || 0,
      imageTechnology:
        tv.attributes?.image?.technology?.image?.data?.attributes?.name || "",
      releaseDate: tv.attributes?.general?.releaseDate || "",
    })) || []
  );
};

export default getFuzzySearch;
