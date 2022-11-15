import apolloSearchTvs, { SearchTvsParams } from "../../graphql/search-tvs";
import SearchTvRepository from "./search-tv.repository";

const searchTvs = async (params: SearchTvsParams) => {
  const { ids, meta } = await apolloSearchTvs(params);

  const tvs = await Promise.all(ids.map(SearchTvRepository.get));

  return { tvs, meta };
};

export default searchTvs;
