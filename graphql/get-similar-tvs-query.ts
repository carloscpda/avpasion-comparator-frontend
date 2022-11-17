import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetSimilarTvsQuery, TvFiltersInput } from "../gql/graphql";

export type GetSimilarTvsParams = {
  id: string;
  imageTechnology: string;
  screenSize: number;
  brand: string;
};

const getSimilarTvsQuery = async ({
  id,
  screenSize,
  imageTechnology,
  brand,
}: GetSimilarTvsParams) => {
  const filters: TvFiltersInput = {
    id: { ne: id },
    general: { screenSize: { gt: screenSize - 5, lt: screenSize + 5 } },
    image: { technology: { image: { name: { eq: imageTechnology } } } },
  };

  const sameTvsFilters: TvFiltersInput = {
    id: { ne: id },
    general: {
      brand: { serie: { brand: { id: { eq: brand } } } },
      screenSize: { gt: screenSize - 5, lt: screenSize + 5 },
    },
  };

  const { data } = await ApolloClient.getClient().query<GetSimilarTvsQuery>({
    variables: { filters, sameTvsFilters },
    query: gql`
      query GetSimilarTvs(
        $filters: TvFiltersInput
        $sameTvsFilters: TvFiltersInput
      ) {
        tvs(
          pagination: { page: 1, pageSize: 5 }
          sort: "hits:desc"
          filters: $filters
        ) {
          data {
            id
          }
        }
        sameBrandTvs: tvs(
          pagination: { page: 1, pageSize: 5 }
          sort: "hits:desc"
          filters: $sameTvsFilters
        ) {
          data {
            id
          }
        }
      }
    `,
  });

  return {
    similarTvIdsByImageTechnology:
      data.tvs?.data.map((tv) => tv.id as string) || [],
    similarTvIdsByBrand:
      data.sameBrandTvs?.data.map((tv) => tv.id as string) || [],
  };
};
export default getSimilarTvsQuery;
