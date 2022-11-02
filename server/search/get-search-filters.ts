import { ParsedUrlQuery } from "querystring";
import ScreenSizeFilter from "../../components/search/filters/screen-size-filter";
import { ImageTechnology } from "../../gql/graphql";
import { BrandFilter } from "../../models/brand-filter";

const TVS_PER_PAGE = 12;

export const getSearchFilters = async ({
  query,
}: {
  query: ParsedUrlQuery;
}) => {
  const [brands, imageTechnologies, prices]: [
    BrandFilter[],
    ImageTechnology[],
    { minPrice: number; maxPrice: number }
  ] = await Promise.all([
    fetch("http://localhost:3000/api/filters/brands").then((res) => res.json()),
    fetch("http://localhost:3000/api/filters/image-technologies").then((res) =>
      res.json()
    ),
    fetch("http://localhost:3000/api/filters/prices").then((res) => res.json()),
  ]);

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = query?.brand ? query.brand.toString() : undefined;

  const price = (query?.price as string[]) || [];
  const minPrice = price[0] ? parseFloat(price[0]) : undefined;
  const maxPrice = price[1] ? parseFloat(price[1]) : undefined;

  const score = (query?.score as string[]) || [];
  const minScore = score[0] ? parseFloat(score[0]) : undefined;
  const maxScore = score[1] ? parseFloat(score[1]) : undefined;

  let sizeGreatherThan;
  let sizeLessThan;
  if (query?.["screen-size"]) {
    const size = parseInt(query["screen-size"] as string);
    const { sizegt, sizelt } = ScreenSizeFilter.Sizes[size];
    sizeGreatherThan = sizegt;
    sizeLessThan = sizelt;
  }

  const imageTechnology = query?.["image-technology"]
    ? query["image-technology"].toString()
    : undefined;

  return {
    brands,
    imageTechnologies,
    prices,
    page: currentPage,
    offset: TVS_PER_PAGE,
    brand,
    imageTechnology,
    sizeGreatherThan,
    sizeLessThan,
    minPrice,
    maxPrice,
    minScore,
    maxScore,
  };
};

export default getSearchFilters;
