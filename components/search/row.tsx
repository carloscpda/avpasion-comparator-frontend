import { HStack, Icon, VStack } from "@chakra-ui/react";
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
      <VStack width="100%" cursor="pointer">
        {children}
      </VStack>
    </NextLink>
  );
};

export default SearchRow;
