import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { SlMagnifier } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";
import React, { useRef } from "react";

const navbarLinks = [
  {
    name: "Todos los Televisores",
    link: "/",
  },
  {
    name: "Comparar",
    link: "/compare",
  },
  {
    name: "Marcas",
    link: "/brands",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Mejores ofertas",
    link: "/sales",
  },
  {
    name: "Mejores televisores",
    link: "/tvs?screen-size=3&page=1",
  },
  {
    name: "Noticias",
    link: "https://avpasion.com",
  },
  {
    name: "Foros",
    link: "https://foro.avpasion.com",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = useRef<any>();

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
        mx={{ base: 4, md: 8, xl: "auto" }}
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap="2">
          <Box ref={menuButtonRef} display={{ lg: "none" }}>
            <Icon
              as={IoMdMenu}
              onClick={onOpen}
              fontSize="4xl"
              color="red.700"
            />
          </Box>
          <NextLink href="/" passHref>
            <a>
              <Image
                src="https://cdn.avpasion.com/wp-content/uploads/2021/06/logo_avp.png"
                alt="logo"
                height={40}
                width={90}
                unoptimized
              />
            </a>
          </NextLink>
        </Flex>
        <HStack
          display={{ base: "none", lg: "flex" }}
          gap="2"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="xs"
        >
          {navbarLinks.map((link) => (
            <Link href={link.link} key={link.link}>
              {link.name}
            </Link>
          ))}
        </HStack>
        <Flex alignItems="center">
          <NextLink href="/search" passHref>
            <IconButton
              as="a"
              icon={<SlMagnifier />}
              aria-label="search"
              variant="link"
            />
          </NextLink>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={menuButtonRef}
        placement="start"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"red.700"}>Menu</DrawerHeader>
          <DrawerBody>
            <VStack
              gap="2"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="xs"
              alignItems="flex-start"
            >
              {navbarLinks.map((link) => (
                <Link href={link.link} key={link.link}>
                  {link.name}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
