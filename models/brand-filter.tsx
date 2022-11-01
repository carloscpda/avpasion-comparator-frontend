import getBrandsFilter from "../graphql/get-brands-filter";

export type BrandFilter = Awaited<ReturnType<typeof getBrandsFilter>>[number];
