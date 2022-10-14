import { Box, Grid, GridItem, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import getColor from "../get-color";
import Score from "../score";
import { TV, useTvs } from "../tvs-provider";

type SectionProps = {
  title: string;
  icon: IconType;
  getScore: (tv: TV) => number;
  id?: string;
  children: React.ReactNode;
};

const Section = ({ title, getScore, children, id, icon }: SectionProps) => {
  let color = "#000000";
  const tvs = useTvs();

  if (tvs.length === 1) {
    color = getColor(getScore(tvs[0]));
  }

  return (
    <Box id={id} pt="20">
      <Box as="section" borderRadius="16" overflow="hidden">
        <Grid
          gridTemplateColumns={`repeat(${tvs.length + 1}, 1fr)`}
          p="4"
          justifyContent="space-between"
          alignItems="flex-end"
          backgroundColor={`${color}0D`}
          borderBottom="2px"
          borderColor={color}
        >
          <GridItem color={color} display="flex">
            <Icon as={icon} fontSize="36" mr="2" />
            <Heading
              as="h2"
              size="lg"
              fontWeight="extrabold"
              height="min-content"
            >
              {title.toUpperCase()}
            </Heading>
          </GridItem>
          {tvs.map((tv) => (
            <GridItem justifySelf="flex-end">
              <Score value={getScore(tv)} />
            </GridItem>
          ))}
        </Grid>
        <Box py="4">{children}</Box>
      </Box>
    </Box>
  );
};

export default Section;
