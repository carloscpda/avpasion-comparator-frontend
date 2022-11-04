import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetFuzzySearchQuery } from "../gql/graphql";
import { SEARCH_TV } from "./search-tv.fragment";

const getFuzzySearch = async () => {
  const { data } = await apollo.query<GetFuzzySearchQuery>({
    query: gql`
      ${SEARCH_TV}
      query GetFuzzySearch {
        tvs(pagination: { limit: -1 }) {
          data {
            attributes {
              ...SearchTv
            }
          }
        }
      }
    `,
  });

  return data.tvs?.data.map((tv) => tv.attributes) || [];
};

export default getFuzzySearch;
