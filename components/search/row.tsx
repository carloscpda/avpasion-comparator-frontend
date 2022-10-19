import { HStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type SearchRowProps = {
  children: ReactNode;
  href: string;
};

const SearchRow = ({ children, href }: SearchRowProps) => {
  return (
    <NextLink href={href} passHref>
      <HStack
        backgroundColor="white"
        width="100%"
        py={2}
        px={4}
        gap={2}
        borderWidth="1px"
        borderColor="gray.100"
        cursor="pointer"
        borderRadius={16}
        transition="0.2s ease"
        _hover={{
          borderColor: "gray.200",
        }}
      >
        {children}
        <Icon as={IoIosArrowForward} color="red.700" />
      </HStack>
    </NextLink>
  );
};

export default SearchRow;
