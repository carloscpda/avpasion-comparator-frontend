import { Box, HStack } from "@chakra-ui/react";

export type ColorValueProps = {
  name: string;
  hex: string;
};

const ColorValue = ({ name, hex }: ColorValueProps) => (
  <HStack alignItems="center" display="inline-flex">
    <Box height={4} width={4} borderRadius={4} background={hex} />
    <Box>{name}</Box>
  </HStack>
);

export default ColorValue;
