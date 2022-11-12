import { NextApiHandler } from "next";
import { createClient } from "redis";
import getHelpArticles from "../../graphql/get-help-articles";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = createClient();
    await redis.connect();

    let helpArticlesCached = await redis.get("help-articles");
    console.log(!helpArticlesCached);

    let helpArticles = null;

    if (!helpArticlesCached) {
      helpArticles = await getHelpArticles();
      redis.set("help-articles", JSON.stringify(helpArticles), { EX: 86400 });
    } else {
      helpArticles = JSON.parse(helpArticlesCached);
    }

    res.status(200).json(helpArticles);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
