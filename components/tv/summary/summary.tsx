import { Grid, GridItem } from "@chakra-ui/react";
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
      mb={{ base: 4, lg: 16 }}
      mt={{ base: 0, lg: 4 }}
      pb={{ base: 4, lg: 16 }}
      gap="8"
      gridTemplateColumns={{
        base: "repeat(1, minmax(0, 1fr))",
        md: "repeat(2, minmax(0, 1fr))",
        lg: "repeat(3, minmax(0, 1fr))",
      }}
      gridTemplateRows={{ md: "auto 1fr" }}
      gridRowGap={{ md: 0 }}
      borderBottom="2px"
      borderColor="gray.100"
    >
      <GridItem
        gridColumn={{ base: "1 / span 2", md: "2" }}
        gridRow={{ md: "1" }}
        my={4}
        display="flex"
        gap={4}
      >
        <SummaryTitle tv={tv} />
        <SummaryScore tv={tv} size={60} />
      </GridItem>
      <GridItem
        gridColumn={{ base: "1 / span 2", md: "1" }}
        gridRow={{ md: "1 / span 2" }}
        justifySelf="flex-start"
      >
        <SummaryPicture tv={tv} />
      </GridItem>
      <GridItem gridColumn={{ base: "span 2", md: "2" }}>
        <SummaryData tv={tv} />
      </GridItem>
      <GridItem
        id="ssm_ctv_leaderboard_pdp"
        gridColumn={{ lg: "3" }}
        gridRow={{ lg: "1 / span 2" }}
      />
    </Grid>
  );
};

export default Summary;
