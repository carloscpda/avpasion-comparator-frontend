import { Enum_Externalsite_Type, GetReviewsQuery } from "../gql/graphql";

export type Review = NonNullable<
  NonNullable<
    NonNullable<GetReviewsQuery["externalSites"]>["data"][number]
  >["attributes"]
>;

const TypeMap = {
  [Enum_Externalsite_Type.Review]: "Review",
  [Enum_Externalsite_Type.Comparative]: "Comparativa",
  [Enum_Externalsite_Type.HelpArticle]: "Ayuda",
};

export const Review = {
  TypeMap,
};
