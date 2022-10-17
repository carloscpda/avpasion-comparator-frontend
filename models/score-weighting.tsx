import { GetScoreWeightingQuery } from "../gql/graphql";

export type ScoreWeighting = NonNullable<
  NonNullable<
    NonNullable<GetScoreWeightingQuery["scoreWeighting"]>["data"]
  >["attributes"]
>;
