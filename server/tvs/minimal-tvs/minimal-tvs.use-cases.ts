import getSearchTv from "../../../graphql/get-search-tv";
import hitOrFetch from "../../shared/infra/redis-helper";
import { MinimalTvDto } from "./minimal-tv.dto";
import MinimalTvsMapper from "./minimal-tvs.mapper";

type GetMinimalTv = (id: string) => MinimalTvDto;

export const getMinimalTv: GetMinimalTv = (id) => {
  return hitOrFetch(
    `next::minimal-tv::${id}`,
    async () => {
      const raw = await getSearchTv({ id });
      return MinimalTvsMapper.toDto(raw);
    },
    60 * 60
  );
};
