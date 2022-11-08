import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Flex alignItems="flex-start" justifyContent="space-between" gap="3">
      <Heading>{title}</Heading>
      <Link href="/search" passHref>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          as="a"
          variant="outline"
          colorScheme="gray"
          color="gray.700"
          fontStyle="italic"
          fontWeight="light"
          justifyContent="space-between"
        >
          Busca por modelo, serie, marca o EAN...
          <Icon as={SlMagnifier} ml="2" />
        </Button>
      </Link>
    </Flex>
  );
};

export default PageTitle;
