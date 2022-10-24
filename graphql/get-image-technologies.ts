import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetImageTechnologiesQuery } from "../gql/graphql";

const getImageTechnologies = async () => {
  const { data } = await apollo.query<GetImageTechnologiesQuery>({
    fetchPolicy: "network-only",
    query: gql`
      query GetImageTechnologies {
        imageTechnologies {
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
    data.imageTechnologies?.data.map((tech) => ({
      id: tech.id as string,
      name: tech.attributes?.name as string,
    })) || []
  );
};

export default getImageTechnologies;
