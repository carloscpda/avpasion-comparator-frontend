import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { CoreTvFragment, GetTvQuery } from "../gql/graphql";
import { CORE_TV } from "./tv.fragment";

const getTv = async ({ slug }: { slug: string }) => {
  const { data, error, errors } =
    await ApolloClient.getClient().query<GetTvQuery>({
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

  if (!data.tvs?.data[0]) {
    throw new Error("Tv not found");
  }

  return {
    ...(data.tvs?.data[0]?.attributes as unknown as CoreTvFragment),
    id: data.tvs?.data[0]?.id,
  };
};
export default getTv;
