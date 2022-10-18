import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetFuzzySearchQuery } from "../gql/graphql";

const getFuzzySearch = async () => {
  const { data } = await apollo.query<GetFuzzySearchQuery>({
    query: gql`
      query GetFuzzySearch {
        tvs {
          data {
            attributes {
              name
              ean
              slug
              general {
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
            }
          }
        }
      }
    `,
  });

  return (
    data.tvs?.data.map((tv) => ({
      name: tv.attributes?.name as string,
      ean: tv.attributes?.ean as string,
      slug: tv.attributes?.slug as string,
      brand: tv.attributes?.general?.brand?.serie?.data?.attributes?.brand?.data
        ?.attributes?.name as string,
      model: tv.attributes?.general?.brand?.model as string,
      serie: tv.attributes?.general?.brand?.serie?.data?.attributes
        ?.name as string,
    })) || []
  );
};

export default getFuzzySearch;
