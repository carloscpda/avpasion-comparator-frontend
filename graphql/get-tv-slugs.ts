import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetTvSlugsQuery } from "../gql/graphql";

const getTvSlugs = async () => {
  const { data } = await apollo.query<GetTvSlugsQuery>({
    query: gql`
      query GetTvSlugs {
        tvs(pagination: { limit: -1 }) {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });

  return data.tvs?.data.map((tv) => tv.attributes?.slug).filter(Boolean) || [];
};

export default getTvSlugs;
