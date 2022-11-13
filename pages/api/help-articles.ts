import { NextApiHandler } from "next";
import getHelpArticles from "../../graphql/get-help-articles";
import RedisClient from "../../infra/redis-client";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = RedisClient.getInstance();

    let helpArticlesCached = await redis.get("help-articles");

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
