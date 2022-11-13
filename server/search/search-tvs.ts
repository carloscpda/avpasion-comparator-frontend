import { createClient } from "redis";
import getSearchTv from "../../graphql/get-search-tv";
import apolloSearchTvs, { SearchTvsParams } from "../../graphql/search-tvs";

const searchTvs = async (params: SearchTvsParams) => {
  const redis = createClient();
  await redis.connect();

  const { ids, meta } = await apolloSearchTvs(params);

  console.log({ ids, meta });

  const tvs = await Promise.all(
    ids.map(async (id) => {
      const cacheData = await redis.get(`next::tv::${id}`);
      let tv = null;

      console.log({ cacheData });

      if (cacheData) {
        tv = JSON.parse(cacheData);
      } else {
        tv = await getSearchTv({ id });
        redis.set(`next::tv::${id}`, JSON.stringify(tv), {
          EX: 3600,
        });
      }

      return tv;
    })
  );

  return { tvs, meta };
};

export default searchTvs;
