import { GetReviewsQuery } from "../gql/graphql";

export type Review = NonNullable<
  NonNullable<
    NonNullable<GetReviewsQuery["externalSites"]>["data"][number]
  >["attributes"]
>;
