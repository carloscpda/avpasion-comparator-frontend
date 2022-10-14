import { TV, TVs } from "../../tvs-provider";
import { SpecValueProps } from "./value/value";

export const buildTextValues = (
  tvs: TVs,
  fn: (tv: TV) => string | null | undefined
): { [model: string]: SpecValueProps } =>
  tvs.reduce(
    (acc, tv) => ({
      ...acc,
      [tv.slug as string]: {
        type: "text",
        value: fn(tv),
      },
    }),
    {}
  );

export const buildBoolValues = (
  tvs: TVs,
  fn: (tv: TV) => boolean | null | undefined
): { [model: string]: SpecValueProps } =>
  tvs.reduce(
    (acc, tv) => ({
      ...acc,
      [tv.slug as string]: {
        type: "bool",
        value: fn(tv),
      },
    }),
    {}
  );
