import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { getFullName, getPicture, getScore } from "../../models/tv";
import Score from "../score";
import { useScoreWeighting } from "../tv/score-weighting-provider";
import SummaryData from "../tv/summary/data";
import SummaryTitle from "../tv/summary/title";
import { useTvs } from "../tv/tvs-provider";

const ComparatorHero = () => {
  const { tvs } = useTvs();
  const scoreWeighting = useScoreWeighting();

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
          <Fragment key={tv.slug}>
            <GridItem gridRow={1} gridColumn={gridColumn}>
              <SummaryTitle tv={tv} size="2xl" captionSize="lg" />
            </GridItem>
            {image && (
              <GridItem
                gridRow={2}
                gridColumn={gridColumn}
                alignSelf="center"
                position="relative"
                height="144"
              >
                <Image
                  src={image}
                  alt={getFullName(tv)}
                  layout="fill"
                  objectFit="contain"
                />
              </GridItem>
            )}
            <GridItem gridRow={3} gridColumn={gridColumn}>
              <Score value={getScore(tv, scoreWeighting)} size={70} />
            </GridItem>
            <GridItem gridRow={4} gridColumn={gridColumn}>
              <SummaryData tv={tv} size="lg" />
            </GridItem>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default ComparatorHero;