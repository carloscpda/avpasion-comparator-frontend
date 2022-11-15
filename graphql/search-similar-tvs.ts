import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { SearchSimilarTvsQuery, TvFiltersInput } from "../gql/graphql";

export type SearchSimilarTvsParams = {
  id: string;
  screenSize: number;
};

const searchSimilarTvs = async ({ id, screenSize }: SearchSimilarTvsParams) => {
  const filters: TvFiltersInput = {
    id: { ne: id },
    general: {
      screenSize: { gt: screenSize - 5, lt: screenSize + 5 },
    },
  };

  const { data } = await ApolloClient.getClient().query<SearchSimilarTvsQuery>({
    variables: { filters },
    query: gql`
      query SearchSimilarTvs($filters: TvFiltersInput) {
        tvs(
          pagination: { page: 1, pageSize: 3 }
          sort: "hits:desc"
          filters: $filters
        ) {
          data {
            id
          }
        }
      }
    `,
  });

  return {
    ids: data.tvs?.data.map((tv) => tv.id as string) || [],
  };
};
export default searchSimilarTvs;
