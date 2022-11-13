import getSearchTv from "../../graphql/get-search-tv";
import RedisClient from "../../infra/redis-client";
import { SearchTV } from "../../models/search-tv";

const getSearchTvRepository = async (id: string) => {
  const redis = RedisClient.getInstance();

  const cacheData = await redis.get(`next::tv::${id}`);
  let tv: SearchTV;

  if (cacheData) {
    tv = JSON.parse(cacheData);
  } else {
    tv = (await getSearchTv({ id })) as SearchTV;
    redis.set(`next::tv::${id}`, JSON.stringify(tv), {
      EX: 3600,
    });
  }

  return tv;
};

export default getSearchTvRepository;
