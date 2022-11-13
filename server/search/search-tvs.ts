import apolloSearchTvs, { SearchTvsParams } from "../../graphql/search-tvs";
import RedisClient from "../../infra/redis-client";
import getSearchTvRepository from "./search-tv.repository";

const searchTvs = async (params: SearchTvsParams) => {
  const redis = RedisClient.getInstance();

  const { ids, meta } = await apolloSearchTvs(params);

  const tvs = await Promise.all(ids.map(getSearchTvRepository));

  return { tvs, meta };
};

export default searchTvs;
