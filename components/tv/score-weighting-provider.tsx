import React, { useContext } from "react";
import { ScoreWeighting } from "../../models/score-weighting";

const ScoreWeightingContext = React.createContext<ScoreWeighting | null>(null);

const ScoreWeightingProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ScoreWeighting;
}) => {
  return (
    <ScoreWeightingContext.Provider value={value}>
      {children}
    </ScoreWeightingContext.Provider>
  );
};

export const useScoreWeighting = () => {
  const scoreWeighting = useContext(ScoreWeightingContext);

  if (!scoreWeighting) {
    throw "No ScoreWeighting value exists";
  }

  return scoreWeighting;
};

export default ScoreWeightingProvider;
