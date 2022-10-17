import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetBrandsQuery } from "../gql/graphql";

const getBrands = async () => {
  const { data } = await apollo.query<GetBrandsQuery>({
    query: gql`
      query GetBrands {
        brands {
          data {
            id
            attributes {
              name
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
    })) || []
  );
};

export default getBrands;
