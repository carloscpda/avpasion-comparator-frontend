import { NextApiHandler } from "next";
import getMarketplaceTvs from "../../../graphql/get-marketplaces-tv";
import RedisClient from "../../../infra/redis-client";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = RedisClient.getInstance();

    const { tvid } = req.query;

    if (typeof tvid !== "string") {
      return res.status(400).json({ data: "tvid should be a string" });
    }

    let pricesCached = await redis.get(`price:${tvid}`);

    let prices = null;

    if (!pricesCached) {
      const marketplaceTvs = await getMarketplaceTvs({ tvId: tvid });

      const sortedMarketplaceTvs = marketplaceTvs?.sort((a, b) => {
        if (a?.available !== b?.available) {
          return a?.available ? -1 : 1;
        }
        const priceA = (a?.price || 0) + (a?.deliveryCost || 0);
        const priceB = (b?.price || 0) + (b?.deliveryCost || 0);
        return priceA - priceB;
      });

      prices = sortedMarketplaceTvs;

      redis.set(`price:${tvid}`, JSON.stringify(sortedMarketplaceTvs), {
        EX: 60 * 30, // 30 mins
      });
    } else {
      prices = JSON.parse(pricesCached);
    }

    res.status(200).json(prices);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
