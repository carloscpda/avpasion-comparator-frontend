import Cors from "cors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apollo from "../../../apollo-client";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  origin: /avpasion\.com$/,
  methods: ["POST"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler: NextApiHandler = async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    await apollo.clearStore();
    res.status(200).json("Cache cleared");
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
