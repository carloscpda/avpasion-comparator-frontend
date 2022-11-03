import { NextApiHandler } from "next";
import getCableConnectionsFilter from "../../../graphql/get-cable-connections-filter";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const cableConnections = await getCableConnectionsFilter();
    res.setHeader("Cache-Control", "s-maxage=600");
    res.status(200).json(cableConnections);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
