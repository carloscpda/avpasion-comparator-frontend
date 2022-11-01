import { NextApiHandler } from "next";
import getBrandsFilter from "../../../graphql/get-brands-filter";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const brands = await getBrandsFilter();
    res.setHeader("Cache-Control", "s-maxage=600");
    res.status(200).json(brands);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
