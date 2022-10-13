import { TV, TVs } from "../../tvs-provider";
import { SpecValueProps } from "./specs";

export const buildTextValues = (
  tvs: TVs,
  fn: (tv: TV) => string | null | undefined
): SpecValueProps[] => tvs.map((tv) => ({ type: "text", value: fn(tv) }));
