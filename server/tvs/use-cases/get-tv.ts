import getSearchTv from "../../../graphql/get-search-tv";
import hitOrFetch from "../../shared/infra/redis-helper";
import { TvDto } from "../tv.dto";
import TvsMapper from "../tvs.mapper";

type GetTv = (id: string) => Promise<TvDto | null>;

const getTv: GetTv = (id) => {
  return hitOrFetch(
    `next::tv::${id}`,
    async () => {
      const raw = await getSearchTv({ id });
      return TvsMapper.toDto(raw);
    },
    60 * 60
  );
};

export default getTv;
