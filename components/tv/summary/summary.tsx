import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useTvs } from "../tvs-provider";
import SummaryData from "./data";
import SummaryPicture from "./picture";
import SummaryScore from "./score";
import SummaryTitle from "./title";

const Summary = () => {
  const { tvs } = useTvs();
  const tv = tvs[0];

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
          <SummaryPicture tv={tv} height="220" />
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
        <SummaryScore tv={tv} />
      </GridItem>
    </Grid>
  );
};

export default Summary;
