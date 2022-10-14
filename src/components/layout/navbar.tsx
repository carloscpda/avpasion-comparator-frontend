import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.100"
      w="100%"
      justify="space-between"
      align="center"
      padding="4"
      bg="gray.800"
      color="white"
    >
      <Box cursor="pointer" onClick={() => navigate("/")}>
        <StaticImage
          src="https://cdn.avpasion.com/wp-content/uploads/2021/06/logo_avp.png"
          alt="logo"
          placeholder="none"
          height={24}
        />
      </Box>
      <HStack spacing="3">
        <Button
          size="sm"
          variant="link"
          onClick={() => navigate("https://www.avpasion.com/")}
        >
          Blog
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
