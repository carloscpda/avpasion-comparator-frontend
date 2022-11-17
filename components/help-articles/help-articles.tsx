import { Grid } from "@chakra-ui/react";
import { HelpArticleSectionDto } from "../../server/help-articles-sections/help-articles-section.dto";
import Center from "../layout/center";
import SectionTitle from "../section-title";
import HelpArticlesSubsection from "./subsection";

type HelpArticlesProps = {
  section1: HelpArticleSectionDto | null;
  section2: HelpArticleSectionDto | null;
  section3: HelpArticleSectionDto | null;
};

const HelpArticles = ({ section1, section2, section3 }: HelpArticlesProps) => {
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
        {section1 && <HelpArticlesSubsection {...section1} />}
        {section2 && <HelpArticlesSubsection {...section2} />}
        {section3 && <HelpArticlesSubsection {...section3} />}
      </Grid>
    </Center>
  );
};

export default HelpArticles;
