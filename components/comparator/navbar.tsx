import { Flex, HStack, Button, Heading, Link } from "@chakra-ui/react";
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
      w="100%"
      justify="space-between"
      align="center"
      py="4"
      bg="whiteAlpha.900"
      backdropFilter="auto"
      backdropBlur="4px"
      zIndex="2"
      width="100%"
      maxW={{ lg: "75em" }}
      mx={[4, 8, 8, "auto"]}
      justifyContent="space-between"
    >
      <Heading
        as="p"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        color="red.700"
      >
        {title}
      </Heading>
      <HStack spacing="3">
        <Link fontSize="sm" onClick={() => router.replace("#image")}>
          Imagen
        </Link>
        <Link fontSize="sm" onClick={() => router.replace("#sound")}>
          Sonido
        </Link>
        <Link fontSize="sm" onClick={() => router.replace("#connectivity")}>
          Conexión
        </Link>
        <Link fontSize="sm" onClick={() => router.replace("#design")}>
          Diseño
        </Link>
        <Link fontSize="sm" onClick={() => router.replace("#system")}>
          Sistema
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
