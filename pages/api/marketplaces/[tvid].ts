import { NextApiHandler } from "next";
import { createClient } from "redis";
import getMarketplaceTvs from "../../../graphql/get-marketplaces-tv";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = createClient();

    const { tvid } = req.query;

    if (typeof tvid !== "string") {
      return res.status(400).json({ data: "tvid should be a string" });
    }

    await redis.connect();

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
        EX: 60 * 60 * 2, // 2 horas
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
