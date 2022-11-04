import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { CoreTvFragment, GetTvQuery } from "../gql/graphql";
import { CORE_TV } from "./tv.fragment";

const getTv = async ({ slug }: { slug: string }) => {
  const { data } = await apollo.query<GetTvQuery>({
    variables: { slug },
    query: gql`
      ${CORE_TV}
      query GetTv($slug: String!) {
        tvs(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              ...CoreTv
            }
          }
        }
      }
    `,
  });

  return {
    ...(data.tvs?.data[0]?.attributes as unknown as CoreTvFragment),
    id: data.tvs?.data[0]?.id,
  };
};
export default getTv;
