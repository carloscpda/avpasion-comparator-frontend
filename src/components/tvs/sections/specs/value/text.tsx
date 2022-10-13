import React from "react";

export type TextValueProps = {
  value: string;
};

const TextValue = ({ value }: TextValueProps) => {
  return <>{value}</>;
};

export default TextValue;
