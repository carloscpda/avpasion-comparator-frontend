import { createClient } from "redis";
import getSearchTv from "../../graphql/get-search-tv";
import { SearchTV } from "../../models/search-tv";

const getSearchTvRepository = async (id: string) => {
  const redis = createClient();
  await redis.connect();

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
