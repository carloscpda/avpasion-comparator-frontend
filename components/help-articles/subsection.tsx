import { Box, Divider, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HelpArticlesSection } from "../../models/help-articles-section";

const HelpArticlesSubsection = ({
  title,
  articles,
}: HelpArticlesSection["section1"]) => {
  return (
    <GridItem>
      <VStack alignItems="flex-start" spacing={4}>
        <Text as="h3" fontWeight="medium">
          {title}
        </Text>
        {articles.map((article) => (
          <NextLink key={article.url} href={article.url} passHref>
            <HStack
              as="a"
              alignItems="flex-start"
              target="_blank"
              transition="all 0.1s"
              spacing={4}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Box
                minWidth="120"
                height="72px"
                borderRadius={3}
                overflow="hidden"
              >
                <Image
                  src={article.image || ""}
                  alt={article.title || ""}
                  width="120"
                  height="72"
                  objectFit="cover"
                  unoptimized
                />
              </Box>
              <Text color="gray.800" fontSize="sm">
                {article.title}
              </Text>
            </HStack>
          </NextLink>
        ))}
      </VStack>
    </GridItem>
  );
};

export default HelpArticlesSubsection;
