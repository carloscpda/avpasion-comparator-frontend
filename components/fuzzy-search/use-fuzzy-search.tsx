import Fuse from "fuse.js";
import { useCallback, useMemo } from "react";
import { SearchTV } from "../../models/search-tv";

const useFuzzySearch = (tvs: SearchTV[]) => {
  const eanFuse = useMemo(() => {
    return new Fuse<SearchTV>(tvs, {
      threshold: 0,
      includeScore: true,
      keys: ["ean"],
    });
  }, [tvs]);

  const othersFuse = useMemo(() => {
    return new Fuse<SearchTV>(tvs, {
      includeScore: true,
      findAllMatches: true,
      keys: [
        "general.brand.serie.data.attributes.brand.data.attributes.name",
        "general.brand.serie.data.attributes.name",
        "general.brand.model",
      ],
    });
  }, [tvs]);

  const search = useCallback(
    (value: string) => {
      const eanSearched = eanFuse.search(value, { limit: 3 });
      const othersSearched = othersFuse.search(value, { limit: 9 });
      const searched = [...eanSearched, ...othersSearched].sort(
        (a, b) => (a.score || 0) - (b.score || 0)
      );

      return searched.map((s) => s.item);
    },
    [eanFuse, othersFuse]
  );

  return search;
};

export default useFuzzySearch;
