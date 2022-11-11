import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetMarketplaceTvsQuery } from "../gql/graphql";

const getMarketplaceTvs = async ({ tvId }: { tvId: string }) => {
  const { data } = await ApolloClient.getClient().query<GetMarketplaceTvsQuery>(
    {
      variables: { tvId },
      query: gql`
        query GetMarketplaceTvs($tvId: ID!) {
          marketplaceTvs(filters: { tv: { id: { eq: $tvId } } }) {
            data {
              id
              attributes {
                createdAt
                affiliateUrl
                available
                deliveryCost
                deliveryTime
                reconditioned
                price
                basePrice
                absoluteDiscount
                relativeDiscount
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
    }
  );

  return data.marketplaceTvs?.data.map((mt) => mt.attributes);
};
export default getMarketplaceTvs;
