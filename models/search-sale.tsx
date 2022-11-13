import getSearchSaleRepository from "../server/search/search-sale.repository";

export type SearchSale = NonNullable<
  Awaited<ReturnType<typeof getSearchSaleRepository>>
>;
