import { Flex, HStack, Button, Heading } from "@chakra-ui/react";
import { navigate } from "gatsby";
import React from "react";
import { useTvs } from "../tv/tvs-provider";

const Navbar = () => {
  const { tvs, getFullName } = useTvs();
  const title = tvs.map(getFullName).join(" vs ");

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      position="sticky"
      top="0"
      borderBottom="1px"
      borderColor="gray.100"
      w="100%"
      justify="space-between"
      align="center"
      padding="4"
      bg="whiteAlpha.700"
      backdropFilter="auto"
      backdropBlur="4px"
      zIndex="2"
    >
      <Heading as="h1" size="md">
        {title}
      </Heading>
      <HStack spacing="3">
        <Button size="sm" variant="link" onClick={() => navigate("#image")}>
          Imagen
        </Button>
        <Button size="sm" variant="link" onClick={() => navigate("#sound")}>
          Sonido
        </Button>
        <Button
          size="sm"
          variant="link"
          onClick={() => navigate("#connectivity")}
        >
          Conexión
        </Button>
        <Button size="sm" variant="link" onClick={() => navigate("#design")}>
          Diseño
        </Button>
        <Button size="sm" variant="link" onClick={() => navigate("#system")}>
          Sistema
        </Button>
        <Button
          size="sm"
          variant="link"
          colorScheme="red"
          color="red.700"
          borderRadius={0}
          onClick={() => navigate("#buy")}
        >
          Comprar
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
