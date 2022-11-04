import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetBrandsFilterQuery } from "../gql/graphql";

const getBrandsFilter = async () => {
  const { data } = await apollo.query<GetBrandsFilterQuery>({
    query: gql`
      query GetBrandsFilter {
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

export default getBrandsFilter;
