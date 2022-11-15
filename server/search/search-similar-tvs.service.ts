import apolloSearchSimilarTvs, {
  SearchSimilarTvsParams,
} from "../../graphql/search-similar-tvs";
import SearchTvRepository from "./search-tv.repository";

class SearchSimilarTvsService {
  public static async search(params: SearchSimilarTvsParams) {
    const { ids } = await apolloSearchSimilarTvs(params);
    return await Promise.all(ids.map(SearchTvRepository.get));
  }
}

export default SearchSimilarTvsService;
