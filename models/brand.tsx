import getBrands from "../graphql/get-brands";

export type Brand = Awaited<ReturnType<typeof getBrands>>[number];
