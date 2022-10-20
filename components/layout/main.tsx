import React from "react";
import { Flex } from "@chakra-ui/react";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Flex
      as="main"
      direction="column"
      maxW={{ lg: "75em" }}
      my={8}
      mx={[4, 8, 8, "auto"]}
    >
      {children}
    </Flex>
  );
};

export default Main;
