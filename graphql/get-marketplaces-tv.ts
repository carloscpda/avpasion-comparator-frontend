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
                    id
                    attributes {
                      name
                      color
                      logo {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                      paymentMethods {
                        data {
                          id
                          attributes {
                            name
                            logo {
                              data {
                                id
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
