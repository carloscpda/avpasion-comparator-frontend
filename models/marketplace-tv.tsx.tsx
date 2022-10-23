import getMarketplaceTvs from "../graphql/get-marketplaces-tv";

export type MarketplaceTv = NonNullable<
  NonNullable<Awaited<ReturnType<typeof getMarketplaceTvs>>>[number]
>;
