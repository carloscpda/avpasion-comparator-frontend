import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";
import getColor from "../helpers/get-color";

type ScoreProps = {
  value: number;
  size?: number;
};

const Score = ({ value, size = 70 }: ScoreProps) => {
  const color = getColor(value);

  return (
    <CircularProgress value={value * 10} color={color} size={`${size}px`}>
      <CircularProgressLabel fontWeight="bold">
        {value === 10 ? "10" : value.toFixed(1)}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Score;
