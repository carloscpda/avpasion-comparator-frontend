import { Box, Grid, GridItem, useBreakpoint } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Score from "../../score";
import { useTvs } from "../tvs-provider";
import SummaryData from "./data";
import SummaryTitle from "./title";

const Summary = () => {
  const bp = useBreakpoint();
  const { tvs, getFullName, getPicture, getScore } = useTvs();
  const tv = tvs[0];
  const fullName = getFullName(tv);
  const pic = getPicture(tv);
  const score = getScore(tv);

  return (
    <Grid
      mb="16"
      mt={[8, 16]}
      gap="8"
      gridTemplateColumns={["repeat(2, minmax(0, 1fr))"]}
      gridTemplateRows={{ md: "auto 1fr" }}
      gridRowGap={{ md: 0 }}
    >
      <GridItem
        gridColumn={{ base: "1 / span 2", md: "2" }}
        gridRow={{ md: "1" }}
        my={4}
      >
        <SummaryTitle tv={tv} />
      </GridItem>
      <GridItem
        gridColumn={{ base: "1 / span 2", md: "1" }}
        gridRow={{ md: "1 / span 2" }}
      >
        <Box
          borderRadius="16"
          border="2px"
          borderColor="gray.100"
          overflow="hidden"
        >
          {!!pic && <GatsbyImage image={pic} alt={fullName} />}
        </Box>
      </GridItem>
      <GridItem gridColumn={{ md: "2" }}>
        <SummaryData tv={tv} />
      </GridItem>
      <GridItem
        justifySelf="flex-end"
        gridColumn={{ md: "3" }}
        gridRow={{ md: "1 / span 2" }}
      >
        <Score value={score} size={bp === "base" ? 100 : 160} />
      </GridItem>
    </Grid>
  );
};

export default Summary;
