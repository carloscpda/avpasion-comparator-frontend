import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetImageTechnologiesQuery } from "../gql/graphql";

const getImageTechnologies = async () => {
  const { data } =
    await ApolloClient.getClient().query<GetImageTechnologiesQuery>({
      query: gql`
        query GetImageTechnologies {
          imageTechnologies {
            data {
              attributes {
                name
              }
            }
          }
        }
      `,
    });

  return (
    data.imageTechnologies?.data.map((tech) => ({
      id: tech.id as string,
      name: tech.attributes?.name as string,
    })) || []
  );
};

export default getImageTechnologies;
