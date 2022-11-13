import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetSearchSaleQuery } from "../gql/graphql";

const getSearchSale = async ({ id }: { id: string }) => {
  const { data } = await ApolloClient.getClient().query<GetSearchSaleQuery>({
    variables: {
      id,
    },
    query: gql`
      query GetSearchSale($id: ID!) {
        marketplaceTv(id: $id) {
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
              tv {
                data {
                  id
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    ...data.marketplaceTv?.data?.attributes,
    id: data.marketplaceTv?.data?.id,
  };
};

export default getSearchSale;
