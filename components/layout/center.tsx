import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

const Center = (props: FlexProps) => {
  return (
    <Flex
      maxW={{ lg: "75em" }}
      mx={{ base: 4, md: 8, xl: "auto" }}
      {...props}
    />
  );
};

export default Center;
