import { SearchTvFragment } from "../../../gql/graphql";
import { MinimalTvDto } from "./minimal-tv.dto";

class MinimalTvsMapper {
  public static toDto(raw: SearchTvFragment): MinimalTvDto | null {
    const brand =
      raw.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes
        ?.name;

    if (!brand) throw new Error("");

    const model = raw.general?.brand?.model;

    const serie = raw.general?.brand?.serie?.data?.attributes?.name;

    const imageTechnology =
      raw.image?.technology?.image?.data?.attributes?.name;

    const picture = raw.design?.pictures?.data.find((pic) =>
      pic.attributes?.alternativeText?.includes("frontal")
    )?.attributes?.url;

    const releaseDate = raw.general?.releaseDate;
    const releaseYear = releaseDate ? releaseDate.split("-")[2] : null;

    const resolutionIconUrl =
      raw.image?.resolution?.data?.attributes?.icon.data?.attributes?.url;

    const score = raw.score;

    const screenSize = raw.general?.screenSize;

    const slug = raw.slug;

    if (
      !brand ||
      !imageTechnology ||
      !model ||
      !picture ||
      !releaseYear ||
      !resolutionIconUrl ||
      !score ||
      !screenSize ||
      !serie ||
      !slug
    ) {
      return null;
    }

    return {
      brand,
      ean: raw.ean,
      imageTechnology,
      model,
      picture,
      price: raw.minPrice || undefined,
      releaseYear,
      resolutionIconUrl,
      score,
      screenSize,
      serie,
      slug,
    };
  }
}

export default MinimalTvsMapper;
