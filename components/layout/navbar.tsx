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
import { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import logo from "../../public/logo.svg";
import Center from "./center";

const navbarLinks = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Comparar",
    link: "/comparar",
  },
  {
    name: "Marcas",
    link: "/marcas",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Mejores ofertas",
    link: "/ofertas?screen-size=3",
  },
  {
    name: "Mejores televisores",
    link: "/mejores-televisores?screen-size=3",
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
      position="sticky"
      zIndex="sticky"
      top="0"
      bg="white"
    >
      <Center width="100%" justifyContent="space-between">
        <Flex alignItems="center" gap="2">
          <Box ref={menuButtonRef} display={{ lg: "none" }} pt="2">
            <Icon
              as={IoMdMenu}
              onClick={onOpen}
              fontSize="4xl"
              color="red.700"
            />
          </Box>
          <NextLink href="/" passHref>
            <Link pt="1">
              <Image src={logo} alt="logo" height={40} width={90} />
            </Link>
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
          <NextLink href="/busqueda" passHref>
            <IconButton
              as="a"
              icon={<SlMagnifier />}
              aria-label="search"
              variant="link"
            />
          </NextLink>
        </Flex>
      </Center>
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
