import { NextApiHandler } from "next";
import { createClient } from "redis";
import getImageTechnologies from "../../../graphql/get-image-technologies";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const redis = createClient();

    await redis.connect();

    let imageTechnologiesCached = await redis.get("filters:image-technologies");
    let imageTechnologies = null;

    if (!imageTechnologiesCached) {
      imageTechnologies = await getImageTechnologies();

      redis.set(
        "filters:image-technologies",
        JSON.stringify(imageTechnologies),
        {
          EX: 86400,
        }
      );
    } else {
      imageTechnologies = JSON.parse(imageTechnologiesCached);
    }

    res.status(200).json(imageTechnologies);
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
