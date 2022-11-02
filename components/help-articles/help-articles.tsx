import { Flex, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HelpArticlesSection } from "../../models/help-articles-section";
import HelpArticlesSubsection from "./subsection";

const HelpArticles = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<HelpArticlesSection>();

  useEffect(() => {
    setLoading(true);
    fetch("/api/help-articles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
      {loading && <Spinner />}
      {data && (
        <Grid
          gap={12}
          gridTemplateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
        >
          <HelpArticlesSubsection {...data.section1} />
          <HelpArticlesSubsection {...data.section2} />
          <HelpArticlesSubsection {...data.section3} />
        </Grid>
      )}
    </Flex>
  );
};

export default HelpArticles;
