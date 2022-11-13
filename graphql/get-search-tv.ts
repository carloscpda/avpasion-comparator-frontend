import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetSearchTvQuery, SearchTvFragment } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const getSearchTv = async ({ id }: { id: string }) => {
  const { data } = await ApolloClient.getClient().query<GetSearchTvQuery>({
    variables: {
      id,
    },
    query: gql`
      query GetSearchTv($id: ID!) {
        tv(id: $id) {
          data {
            id
            attributes {
              ...SearchTv
            }
          }
        }
      }
      ${SEARCH_TV}
    `,
  });

  return {
    ...(data.tv?.data?.attributes as unknown as SearchTvFragment),
    id: data.tv?.data?.id,
  };
};
export default getSearchTv;
