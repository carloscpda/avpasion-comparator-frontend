import { Grid, GridItem } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Score from "../score";
import SummaryData from "../tv/summary/data";
import SummaryTitle from "../tv/summary/title";
import { useTvs } from "../tv/tvs-provider";

const ComparatorHero = () => {
  const { tvs, getFullName, getPicture, getScore } = useTvs();

  return (
    <Grid
      mb="16"
      mt={[8, 16]}
      gap="8"
      templateColumns={{
        base: `repeat(${tvs.length}, minmax(0, 1fr))`,
        md: `repeat(${tvs.length + 1}, minmax(0, 1fr))`,
      }}
    >
      {tvs.map((tv, index) => {
        const image = getPicture(tv);
        const gridColumn = {
          base: index + 1,
          md: index + 2,
        };
        return (
          <>
            <GridItem gridRow={1} gridColumn={gridColumn}>
              <SummaryTitle tv={tv} size="2xl" captionSize="lg" />
            </GridItem>
            {image && (
              <GridItem gridRow={2} gridColumn={gridColumn} alignSelf="center">
                <GatsbyImage image={image} alt={getFullName(tv)} />
              </GridItem>
            )}
            <GridItem gridRow={3} gridColumn={gridColumn}>
              <Score value={getScore(tv)} size={70} />
            </GridItem>
            <GridItem gridRow={4} gridColumn={gridColumn}>
              <SummaryData tv={tv} size="lg" />
            </GridItem>
          </>
        );
      })}
    </Grid>
  );
};

export default ComparatorHero;
