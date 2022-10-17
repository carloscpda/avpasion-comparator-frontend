import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
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
      padding="4"
      bg="gray.800"
      color="white"
    >
      <Box
        cursor="pointer"
        onClick={() => router.push("/")}
        position="relative"
        height={6}
        width={8}
      >
        <Image
          src="https://cdn.avpasion.com/wp-content/uploads/2021/06/logo_avp.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <HStack spacing="3">
        <Button
          size="sm"
          variant="link"
          onClick={() => router.push("https://www.avpasion.com/")}
        >
          Blog
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
