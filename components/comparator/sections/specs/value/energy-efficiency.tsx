import { Box } from "@chakra-ui/react";

const EnergyEfficiencyMap = {
  A: "#00B500",
  B: "#55C800",
  C: "#AADA00",
  D: "#FFED00",
  E: "#FF8E00",
  F: "#FF4F00",
  G: "#FF0000",
};

export type EnergyEfficiencyValueProps = {
  letter: keyof typeof EnergyEfficiencyMap;
};

const EnergyEfficiencyValue = ({ letter }: EnergyEfficiencyValueProps) => (
  <Box
    py={0.5}
    px={2}
    borderRadius={2}
    background={EnergyEfficiencyMap[letter]}
    width="min-content"
    color={letter && "white"}
    display="inline"
  >
    {letter || "-"}
  </Box>
);

export default EnergyEfficiencyValue;
