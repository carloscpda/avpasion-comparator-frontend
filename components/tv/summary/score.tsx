import { useBreakpoint } from "@chakra-ui/react";
import React from "react";
import { getScore, TV } from "../../../models/tv";
import Score from "../../score";
import { useScoreWeighting } from "../score-weighting-provider";

type SummaryScoreProps = {
  tv: TV;
  size?: number;
};

const SummaryScore = ({ tv, size }: SummaryScoreProps) => {
  const bp = useBreakpoint();
  const scores = useScoreWeighting();
  const score = getScore(tv, scores);

  return <Score value={score} size={size ? size : bp === "base" ? 100 : 160} />;
};

export default SummaryScore;
