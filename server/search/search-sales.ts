import { createClient } from "redis";
import apolloSearchSales, {
  SearchSalesParams,
} from "../../graphql/search-sales";
import getSearchSaleRepository from "./search-sale.repository";

const searchSales = async (params: SearchSalesParams) => {
  const redis = createClient();
  await redis.connect();

  const { ids, meta } = await apolloSearchSales(params);

  const sales = await Promise.all(ids.map(getSearchSaleRepository));

  return { sales, meta };
};

export default searchSales;
