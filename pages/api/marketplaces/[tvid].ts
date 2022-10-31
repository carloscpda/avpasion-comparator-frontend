import { NextApiHandler } from "next";
import getMarketplaceTvs from "../../../graphql/get-marketplaces-tv";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { tvid } = req.query;

    if (typeof tvid !== "string") {
      return res.status(400).json({ data: "tvid should be a string" });
    }

    const marketplaceTvs = await getMarketplaceTvs({ tvId: tvid });

    const sortedMarketplaceTvs = marketplaceTvs?.sort((a, b) => {
      if (a?.available !== b?.available) {
        return a?.available ? -1 : 1;
      }
      const priceA = (a?.price || 0) + (a?.deliveryCost || 0);
      const priceB = (b?.price || 0) + (b?.deliveryCost || 0);
      return priceA - priceB;
    });

    res.status(200).json(sortedMarketplaceTvs);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
