import { Flex, FlexProps, Heading, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

type SectionTitle = {
  title: string;
  linkHref?: string;
  linkText?: string;
} & FlexProps;

const SectionTitle = ({
  linkHref,
  title,
  linkText,
  ...flexProps
}: SectionTitle) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="2"
      justifyContent="space-between"
      mb="4"
      {...flexProps}
    >
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        {title}
      </Heading>
      {linkHref && (
        <NextLink href={linkHref} passHref>
          <Link textTransform="uppercase" display="flex" alignItems="center">
            <Text as="span" fontSize="sm" fontWeight="bold">
              {linkText}
            </Text>
            <Icon as={IoArrowForwardOutline} fontSize="xl" />
          </Link>
        </NextLink>
      )}
    </Flex>
  );
};

export default SectionTitle;
