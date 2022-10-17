import { SearchTvsQuery } from "../gql/graphql";

export type SearchTV = NonNullable<
  NonNullable<SearchTvsQuery["tvs"]>["data"][number]["attributes"]
>;
