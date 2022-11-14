import getHelpArticles from "../../graphql/get-help-articles";
import RedisClient from "../../infra/redis-client";

class HelpArticlesRepository {
  public static async get() {
    const redis = RedisClient.getInstance();
    const redisKey = "help-articles";

    let helpArticlesCached = await redis.get(redisKey);

    let helpArticles = null;

    if (!helpArticlesCached) {
      helpArticles = await getHelpArticles();
      redis.set(redisKey, JSON.stringify(helpArticles), { EX: 86400 });
    } else {
      helpArticles = JSON.parse(helpArticlesCached);
    }

    return helpArticles;
  }
}

export default HelpArticlesRepository;
