import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetTvSeriesQuery } from "../gql/graphql";

const getTvSeries = async ({ serieId }: { serieId: string }) => {
  const { data } = await ApolloClient.getClient().query<GetTvSeriesQuery>({
    variables: { serieId },
    query: gql`
      query GetTvSeries($serieId: ID!) {
        tvs(
          sort: "name:desc"
          filters: { general: { brand: { serie: { id: { eq: $serieId } } } } }
        ) {
          data {
            attributes {
              name
              slug
              minPrice
              general {
                screenSize
              }
              image {
                resolution {
                  data {
                    attributes {
                      resolution
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
