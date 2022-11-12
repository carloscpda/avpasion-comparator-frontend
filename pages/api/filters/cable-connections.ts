import { NextApiHandler } from "next";
import { createClient } from "redis";
import getCableConnectionsFilter from "../../../graphql/get-cable-connections-filter";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = createClient();

    await redis.connect();

    let cableConnectionsCached = await redis.get("filters:cable-connections");
    let cableConnections = null;

    if (!cableConnectionsCached) {
      cableConnections = await getCableConnectionsFilter();

      redis.set("filters:cable-connections", JSON.stringify(cableConnections), {
        EX: 86400,
      });
    } else {
      cableConnections = JSON.parse(cableConnectionsCached);
    }

    res.status(200).json(cableConnections);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
