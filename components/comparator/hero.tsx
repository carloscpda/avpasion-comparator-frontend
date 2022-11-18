import { Grid, GridItem, Image } from "@chakra-ui/react";
import { Fragment } from "react";
import { getFullName, getPicture } from "../../models/tv";
import Score from "../score";
import PricesReduced from "../tv/prices/prices-reduced";
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
      <GridItem id="ssm_ctv_leaderboard_pdp" gridRow={{ md: "1 / span 3" }} />
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
              >
                <Image
                  src={`${image}?width=400`}
                  alt={getFullName(tv)}
                  objectFit="contain"
                />
              </GridItem>
            )}
            <GridItem gridRow={3} gridColumn={gridColumn}>
              <SummaryData tv={tv} size="lg" />
            </GridItem>
            <GridItem gridRow={4} gridColumn={gridColumn}>
              <PricesReduced tvId={tv.id} />
            </GridItem>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default ComparatorHero;
