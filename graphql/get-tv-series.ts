import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetTvSeriesQuery } from "../gql/graphql";

const getTvSeries = async ({ serieId }: { serieId: string }) => {
  const { data } = await apollo.query<GetTvSeriesQuery>({
    fetchPolicy: "network-only",
    variables: { serieId },
    query: gql`
      query GetTvSeries($serieId: ID!) {
        tvs(
          filters: { general: { brand: { serie: { id: { eq: $serieId } } } } }
        ) {
          data {
            attributes {
              name
              slug
              general {
                screenSize
              }
              image {
                resolution {
                  data {
                    attributes {
                      alternativeName
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data.tvs?.data.map((tv) => tv.attributes);
};

export default getTvSeries;
