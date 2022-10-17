import { TV } from "../../../../models/tv";
import { SpecValueProps } from "./value/value";

export const buildTextValues = (
  tvs: TV[],
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
  tvs: TV[],
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
