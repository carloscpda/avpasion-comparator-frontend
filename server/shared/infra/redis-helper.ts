import RedisClient from "../../../infra/redis-client";

const hitOrFetch = async <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number
): Promise<T> => {
  const redis = RedisClient.getInstance();

  let cache = await redis.get(key);

  if (cache) {
    return JSON.parse(cache);
  } else {
    const data = await fetchFn();
    redis.set(key, JSON.stringify(data), { EX: ttl });
    return data;
  }
};

export default hitOrFetch;
