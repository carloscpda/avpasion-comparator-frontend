import { GetTvSeriesQuery } from "../gql/graphql";

export type TVSeries = NonNullable<
  NonNullable<GetTvSeriesQuery["tvs"]>["data"][number]
>["attributes"][];
