import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetBrandsQuery } from "../gql/graphql";

const getBrands = async () => {
  const { data } = await ApolloClient.getClient().query<GetBrandsQuery>({
    query: gql`
      query GetBrands {
        brands(
          sort: "name:asc"
          pagination: { limit: -1 }
          filters: { series: { id: { notNull: true } } }
        ) {
          data {
            id
            attributes {
              name
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
              series(pagination: { limit: -1 }) {
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

  return (
    data.brands?.data.map((brand) => ({
      id: brand.id as string,
      name: brand.attributes?.name as string,
      logo: brand.attributes?.logo?.data?.attributes?.url || "",
      series: brand.attributes?.series?.data.length,
    })) || []
  );
};

export default getBrands;
