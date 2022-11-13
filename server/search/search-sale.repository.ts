import { createClient } from "redis";
import getSearchSale from "../../graphql/get-search-sale";
import getSearchTvRepository from "./search-tv.repository";

const getSearchSaleRepository = async (id: string) => {
  const redis = createClient();
  await redis.connect();

  const cacheData = await redis.get(`next::sale::${id}`);
  let sale: NonNullable<Awaited<ReturnType<typeof getSearchSale>>>;

  if (cacheData) {
    sale = JSON.parse(cacheData);
  } else {
    sale = await getSearchSale({ id });
    redis.set(`next::sale::${id}`, JSON.stringify(sale), { EX: 3600 });
  }

  const tv = await getSearchTvRepository(sale.tv?.data?.id || "");

  return { ...sale, tv };
};

export default getSearchSaleRepository;
