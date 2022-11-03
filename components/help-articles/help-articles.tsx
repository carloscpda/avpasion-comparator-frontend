import { Grid } from "@chakra-ui/react";
import { HelpArticlesSection } from "../../models/help-articles-section";
import Center from "../layout/center";
import SectionTitle from "../section-title";
import HelpArticlesSubsection from "./subsection";

const HelpArticles = ({
  section1,
  section2,
  section3,
}: HelpArticlesSection) => {
  return (
    <Center mt="16" direction="column">
      <SectionTitle title="Articulos de interés">
        Articulos de interés
      </SectionTitle>
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
    </Center>
  );
};

export default HelpArticles;
