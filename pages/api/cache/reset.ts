import { NextApiHandler } from "next";
import apollo from "../../../apollo-client";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    await apollo.clearStore();
    res.status(200).json("Cache cleared");
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
