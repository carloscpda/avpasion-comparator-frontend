import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getFullName } from "../../models/tv";
import Center from "../layout/center";
import { useTvs } from "../tv/tvs-provider";

const Navbar = () => {
  const router = useRouter();
  const showLinks = useBreakpointValue({ base: false, md: true });
  const { tvs } = useTvs();
  const title = tvs.map(getFullName).join(" vs ");

  return (
    <Box
      display="flex"
      position="sticky"
      top="50px"
      bg="whiteAlpha.800"
      backdropFilter="auto"
      backdropBlur="4px"
      zIndex="3"
    >
      <Center
        py="3"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
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
          {showLinks && (
            <>
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
            </>
          )}
          {tvs.length === 1 && (
            <NextLink
              href={`/comparar?tv=${tvs[0].slug}`}
              passHref
              prefetch={false}
            >
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
      </Center>
    </Box>
  );
};

export default Navbar;
