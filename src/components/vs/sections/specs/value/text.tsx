import React from "react";
import { TV, TVs } from "../../../tvs-provider";
import { SpecValueProps } from "../specs";

export type TextValueProps = {
  value?: string | null;
};

const TextValue = ({ value }: TextValueProps) => {
  return <>{value || "-"}</>;
};

export default TextValue;
