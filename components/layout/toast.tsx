import { Flex } from "@chakra-ui/react";
import Center from "./center";
import SocialLinks from "../social-links";

const Toast = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      bg="red.700"
      color="white"
      display={{ base: "none", md: "flex" }}
    >
      <Center
        width="100%"
        height="36px"
        justifyContent="flex-end"
        alignItems="center"
      >
        <SocialLinks />
      </Center>
    </Flex>
  );
};

export default Toast;
