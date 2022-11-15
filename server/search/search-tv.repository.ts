import getSearchTv from "../../graphql/get-search-tv";
import RedisClient from "../../infra/redis-client";
import { SearchTV } from "../../models/search-tv";

class SearchTvRepository {
  public static async get(id: string) {
    const redis = RedisClient.getInstance();

    const cacheData = await redis.get(`next::search-tv::${id}`);
    let tv: SearchTV;

    if (cacheData) {
      tv = JSON.parse(cacheData);
    } else {
      tv = (await getSearchTv({ id })) as SearchTV;
      redis.set(`next::search-tv::${id}`, JSON.stringify(tv), {
        EX: 3600,
      });
    }

    return tv;
  }
}

export default SearchTvRepository;
