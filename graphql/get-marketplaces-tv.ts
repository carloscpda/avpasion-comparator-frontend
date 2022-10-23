import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetMarketplaceTvsQuery } from "../gql/graphql";

const getMarketplaceTvs = async ({ tvId }: { tvId: string }) => {
  const { data } = await apollo.query<GetMarketplaceTvsQuery>({
    variables: { tvId },
    query: gql`
      query GetMarketplaceTvs($tvId: ID!) {
        marketplaceTvs(filters: { tv: { id: { eq: $tvId } } }) {
          data {
            attributes {
              affiliateUrl
              available
              deliveryCost
              deliveryTime
              financing
              reconditioned
              prices(pagination: { limit: 1 }, sort: "datetime:desc") {
                data {
                  attributes {
                    datetime
                    price
                    basePrice
                  }
                }
              }
              marketplace {
                data {
                  attributes {
                    name
                    color
                    logo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    paymentMethods {
                      data {
                        attributes {
                          name
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
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data.marketplaceTvs?.data.map((mt) => mt.attributes);
};
export default getMarketplaceTvs;
