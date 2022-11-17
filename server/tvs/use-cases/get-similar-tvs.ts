import getSimilarTvsQuery from "../../../graphql/get-similar-tvs-query";
import hitOrFetch from "../../shared/infra/redis-helper";
import { TvDto } from "../tv.dto";
import getTv from "./get-tv";

type GetSimilarTvs = (id: string) => Promise<{
  similarTvIdsByImageTechnology: TvDto[];
  similarTvIdsByBrand: TvDto[];
}>;

const getSimilarTvs: GetSimilarTvs = async (id) => {
  const tv = await getTv(id);

  if (!tv) {
    return {
      similarTvIdsByBrand: [],
      similarTvIdsByImageTechnology: [],
    };
  }

  return hitOrFetch(
    `next::similar-tvs::${id}`,
    async () => {
      const raw = await getSimilarTvsQuery({
        id,
        screenSize: tv.screenSize,
        imageTechnology: tv.imageTechnology,
        brand: tv.brandId,
      });

      const similarTvIdsByImageTechnology = (
        await Promise.all(raw.similarTvIdsByImageTechnology.map(getTv))
      ).filter((tv) => tv !== null) as TvDto[];
      const similarTvIdsByBrand = (
        await Promise.all(raw.similarTvIdsByBrand.map(getTv))
      ).filter((tv) => tv !== null) as TvDto[];

      return { similarTvIdsByImageTechnology, similarTvIdsByBrand };
    },
    60 * 60 * 24
  );
};

export default getSimilarTvs;
