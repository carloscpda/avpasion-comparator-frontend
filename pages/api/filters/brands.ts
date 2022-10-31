import { NextApiHandler } from "next";
import getBrands from "../../../graphql/get-brands";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const brands = await getBrands();
    res.setHeader("Cache-Control", "s-maxage=600");
    res.status(200).json(brands);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
