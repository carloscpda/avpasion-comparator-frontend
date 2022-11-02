import { Flex, Grid, Heading } from "@chakra-ui/react";
import { HelpArticlesSection } from "../../models/help-articles-section";
import HelpArticlesSubsection from "./subsection";

const HelpArticles = ({
  section1,
  section2,
  section3,
}: HelpArticlesSection) => {
  return (
    <Flex
      mt="32"
      direction="column"
      maxW={{ lg: "75em" }}
      mx={{ base: 4, md: 8, xl: "auto" }}
    >
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb="4"
      >
        Articulos de interés
      </Heading>

      <Grid
        gap={12}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
      >
        <HelpArticlesSubsection {...section1} />
        <HelpArticlesSubsection {...section2} />
        <HelpArticlesSubsection {...section3} />
      </Grid>
    </Flex>
  );
};

export default HelpArticles;
