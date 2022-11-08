import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetPricesQuery } from "../gql/graphql";

const getPrices = async () => {
  const { data } = await ApolloClient.getClient().query<GetPricesQuery>({
    query: gql`
      query GetPrices {
        maxPrice: tvs(sort: "minPrice:desc", pagination: { limit: 1 }) {
          data {
            id
            attributes {
              minPrice
            }
          }
        }
        minPrice: tvs(
          sort: "minPrice:asc"
          pagination: { limit: 1 }
          filters: { minPrice: { gt: 0 } }
        ) {
          data {
            id
            attributes {
              minPrice
            }
          }
        }
      }
    `,
  });

  return {
    minPrice: data.minPrice?.data[0].attributes?.minPrice || 0,
    maxPrice: data.maxPrice?.data[0].attributes?.minPrice || 0,
  };
};

export default getPrices;
