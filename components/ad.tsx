import { Box, BoxProps } from "@chakra-ui/react";

const Ad = (props: BoxProps & { id: string }) => (
  <Box display="flex" justifyContent="center" minH="100px" {...props} />
);

export default Ad;
