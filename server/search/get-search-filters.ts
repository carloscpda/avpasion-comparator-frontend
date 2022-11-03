import { ParsedUrlQuery } from "querystring";
import ScreenSizeFilter from "../../components/search/filters/screen-size-filter";
import { ImageTechnology } from "../../gql/graphql";
import { BrandFilter } from "../../models/brand-filter";
import { CableConnectionFilter } from "../../models/cable-connections-filter";

const TVS_PER_PAGE = 12;

export const getSearchFilters = async ({
  query,
}: {
  query: ParsedUrlQuery;
}) => {
  const [brands, imageTechnologies, prices, cableConnections]: [
    BrandFilter[],
    ImageTechnology[],
    { minPrice: number; maxPrice: number },
    CableConnectionFilter[]
  ] = await Promise.all([
    fetch("http://localhost:3000/api/filters/brands").then((res) => res.json()),
    fetch("http://localhost:3000/api/filters/image-technologies").then((res) =>
      res.json()
    ),
    fetch("http://localhost:3000/api/filters/prices").then((res) => res.json()),
    fetch("http://localhost:3000/api/filters/cable-connections").then((res) =>
      res.json()
    ),
  ]);

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = (query?.brand as string[]) || undefined;
  const currentCableConnections = (query?.cable as string[]) || undefined;
  const imageTechnology =
    (query?.["image-technology"] as string[]) || undefined;

  const price = (query?.price as string[]) || [];
  const minPrice = price[0] ? parseFloat(price[0]) : undefined;
  const maxPrice = price[1] ? parseFloat(price[1]) : undefined;

  const score = (query?.score as string) || undefined;
  const minScore = score ? parseFloat(score) : undefined;

  const imageScore = query?.["image-score"]
    ? parseFloat(query["image-score"] as string)
    : undefined;

  let sizeGreatherThan;
  let sizeLessThan;
  if (query?.["screen-size"]) {
    const size = parseInt(query["screen-size"] as string);
    const { sizegt, sizelt } = ScreenSizeFilter.Sizes[size];
    sizeGreatherThan = sizegt;
    sizeLessThan = sizelt;
  }

  return {
    brands,
    cableConnections,
    imageTechnologies,
    prices,
    page: currentPage,
    offset: TVS_PER_PAGE,
    brand,
    currentCableConnections,
    imageTechnology,
    sizeGreatherThan,
    sizeLessThan,
    minPrice,
    maxPrice,
    minScore,
    imageScore,
  };
};

export default getSearchFilters;
