import { NextApiHandler } from "next";
import getBrandsFilter from "../../../graphql/get-brands-filter";
import RedisClient from "../../../infra/redis-client";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = RedisClient.getInstance();

    let brandsCached = await redis.get("filters:brands");
    let brands = null;

    if (!brandsCached) {
      brands = await getBrandsFilter();

      redis.set("filters:brands", JSON.stringify(brands), {
        EX: 86400,
      });
    } else {
      brands = JSON.parse(brandsCached);
    }

    res.status(200).json(brands);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
