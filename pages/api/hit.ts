import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { tvid } = JSON.parse(req.body);

    if (typeof tvid !== "string") {
      return res.status(400).json({ data: "tvid should be a string" });
    }

    const token = process.env.STRAPI_TOKEN;

    await fetch("https://cmc.avpasion.com/api/hit", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ tv: tvid }),
    });

    res.status(200).json("Hit");
  } else {
    res.status(404).json("Not found");
  }
};

export default handler;
