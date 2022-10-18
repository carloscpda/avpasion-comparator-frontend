import { useBreakpoint } from "@chakra-ui/react";
import React from "react";
import { TV } from "../../../models/tv";
import Score from "../../score";

type SummaryScoreProps = {
  tv: TV;
  size?: number;
};

const SummaryScore = ({ tv, size }: SummaryScoreProps) => {
  const bp = useBreakpoint();

  return (
    <Score
      value={tv.score || 0}
      size={size ? size : bp === "base" ? 100 : 160}
    />
  );
};

export default SummaryScore;
