import { Box, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { HelpArticleSectionDto } from "../../server/help-articles-sections/help-articles-section.dto";

const HelpArticlesSubsection = ({ title, articles }: HelpArticleSectionDto) => {
  return (
    <GridItem>
      <VStack alignItems="flex-start" spacing={4}>
        <Text as="h3" fontWeight="medium">
          {title}
        </Text>
        {articles.map((article) => (
          <NextLink
            key={article.url}
            href={article.url}
            passHref
            prefetch={false}
          >
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
                  src={article.picture || ""}
                  alt={article.title || ""}
                  width="120px"
                  height="72px"
                  objectFit="cover"
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
