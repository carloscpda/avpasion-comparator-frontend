import searchSales from "../graphql/search-sales";
import { SearchTV } from "./search-tv";

export type SearchSale = NonNullable<
  Awaited<ReturnType<typeof searchSales>>["data"]
>[number] & {
  tv: {
    data: {
      attributes: SearchTV;
    };
  };
};
