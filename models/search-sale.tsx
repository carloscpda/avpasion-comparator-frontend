import getSearchSales from "../graphql/search-sales";
import { SearchTV } from "./search-tv";

export type SearchSale = NonNullable<
  Awaited<ReturnType<typeof getSearchSales>>["data"]
>[number] & {
  tv: {
    data: {
      attributes: SearchTV;
    };
  };
};
