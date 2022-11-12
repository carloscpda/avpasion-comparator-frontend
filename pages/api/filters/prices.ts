import { NextApiHandler } from "next";
import { createClient } from "redis";
import getPrices from "../../../graphql/get-prices";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = createClient();

    await redis.connect();

    let pricesCached = await redis.get("filters:prices");
    let prices = null;

    if (!pricesCached) {
      prices = await getPrices();

      redis.set("filters:prices", JSON.stringify(prices), {
        EX: 86400,
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
