import { NextApiHandler } from "next";
import getHelpArticles from "../../graphql/get-help-articles";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const helpArticles = await getHelpArticles();
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).json(helpArticles);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
