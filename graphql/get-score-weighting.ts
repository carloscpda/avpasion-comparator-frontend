import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetScoreWeightingQuery } from "../gql/graphql";

const getScoreWeighting = async () => {
  const { data } = await apollo.query<GetScoreWeightingQuery>({
    query: gql`
      query GetScoreWeighting {
        scoreWeighting {
          data {
            attributes {
              image
              design
              connections
              sound
              system
            }
          }
        }
      }
    `,
  });

  return data.scoreWeighting?.data?.attributes;
};
export default getScoreWeighting;
