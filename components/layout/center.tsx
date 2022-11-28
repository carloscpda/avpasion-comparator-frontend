import { Flex, FlexProps } from "@chakra-ui/react";

const Center = (props: FlexProps) => {
  return (
    <Flex
      maxW={{ lg: "75em" }}
      mx={{ base: 4, md: 8, xl: "auto" }}
      width={{ xl: "100%" }}
      {...props}
    />
  );
};

export default Center;
