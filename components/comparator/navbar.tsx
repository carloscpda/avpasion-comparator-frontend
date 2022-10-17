import { Flex, HStack, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { getFullName } from "../../models/tv";
import { useTvs } from "../tv/tvs-provider";

const Navbar = () => {
  const router = useRouter();
  const { tvs } = useTvs();
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
        <Button size="sm" variant="link" onClick={() => router.push("#image")}>
          Imagen
        </Button>
        <Button size="sm" variant="link" onClick={() => router.push("#sound")}>
          Sonido
        </Button>
        <Button
          size="sm"
          variant="link"
          onClick={() => router.push("#connectivity")}
        >
          Conexión
        </Button>
        <Button size="sm" variant="link" onClick={() => router.push("#design")}>
          Diseño
        </Button>
        <Button size="sm" variant="link" onClick={() => router.push("#system")}>
          Sistema
        </Button>
        <Button
          size="sm"
          variant="link"
          colorScheme="red"
          color="red.700"
          borderRadius={0}
          onClick={() => router.push("#buy")}
        >
          Comprar
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
