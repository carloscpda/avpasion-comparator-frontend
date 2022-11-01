import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { getFullName, getPicture } from "../../models/tv";
import Score from "../score";
import SummaryData from "../tv/summary/data";
import SummaryTitle from "../tv/summary/title";
import { useTvs } from "../tv/tvs-provider";

const ComparatorHero = () => {
  const { tvs } = useTvs();

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
            <GridItem
              gridRow={1}
              gridColumn={gridColumn}
              display={{ lg: "flex" }}
              gap={4}
            >
              <SummaryTitle tv={tv} size="2xl" captionSize="lg" />
              <Score value={tv.score || 0} size={50} />
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
                  src={`${image}?width=400`}
                  alt={getFullName(tv)}
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </GridItem>
            )}
            <GridItem gridRow={3} gridColumn={gridColumn}>
              <SummaryData tv={tv} size="lg" />
            </GridItem>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default ComparatorHero;
