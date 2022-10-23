import { Box, Flex, HStack, Icon, Link } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SlMagnifier } from "react-icons/sl";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.100"
      w="100%"
      justify="space-between"
      align="center"
      padding="1"
    >
      <Flex
        width="100%"
        maxW={{ lg: "75em" }}
        mx={[4, 8, 8, "auto"]}
        justifyContent="space-between"
      >
        <Box
          cursor="pointer"
          onClick={() => router.push("/")}
          position="relative"
        >
          <Image
            src="https://cdn.avpasion.com/wp-content/uploads/2021/06/logo_avp.png"
            alt="logo"
            height={40}
            width={90}
          />
        </Box>
        <HStack
          gap="2"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="xs"
        >
          <Link>Inicio</Link>
          <Link>Video</Link>
          <Link>Sonido</Link>
          <Link>Review</Link>
          <Link>Guias de compra</Link>
          <Link>Ofertas</Link>
          <Link>Foros</Link>
          <Link>Youtube</Link>
          <Link>Editorial</Link>
          <Link>Cine</Link>
        </HStack>
        <HStack spacing="3">
          <Icon as={SlMagnifier} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
