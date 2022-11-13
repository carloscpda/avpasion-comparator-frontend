import apolloSearchSales, {
  SearchSalesParams,
} from "../../graphql/search-sales";
import RedisClient from "../../infra/redis-client";
import getSearchSaleRepository from "./search-sale.repository";

const searchSales = async (params: SearchSalesParams) => {
  const redis = RedisClient.getInstance();

  const { ids, meta } = await apolloSearchSales(params);

  const sales = await Promise.all(ids.map(getSearchSaleRepository));

  return { sales, meta };
};

export default searchSales;
