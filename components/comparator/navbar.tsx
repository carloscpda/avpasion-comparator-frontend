import { Flex, HStack, Button, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
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
      justifyContent="space-between"
      alignItems="center"
      maxW={{ lg: "75em" }}
      mx={{ base: 4, md: 8, xl: "auto" }}
      py="4"
      bg="whiteAlpha.900"
      backdropFilter="auto"
      backdropBlur="4px"
      zIndex="2"
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
        <Link
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          onClick={() => router.replace("#image")}
        >
          Imagen
        </Link>
        <Link
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          onClick={() => router.replace("#sound")}
        >
          Sonido
        </Link>
        <Link
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          onClick={() => router.replace("#connectivity")}
        >
          Conexión
        </Link>
        <Link
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          onClick={() => router.replace("#design")}
        >
          Diseño
        </Link>
        <Link
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          onClick={() => router.replace("#system")}
        >
          Sistema
        </Link>
        {tvs.length === 1 && (
          <NextLink href={`/search?tv=${tvs[0].slug}`} passHref>
            <Button
              backgroundColor="red.700"
              size="sm"
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              _hover={{ backgroundColor: "red.800" }}
            >
              Comparar
            </Button>
          </NextLink>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
