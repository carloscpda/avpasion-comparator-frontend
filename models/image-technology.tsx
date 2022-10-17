import getImageTechnologies from "../graphql/get-image-technologies";

export type ImageTechnology = Awaited<
  ReturnType<typeof getImageTechnologies>
>[number];
