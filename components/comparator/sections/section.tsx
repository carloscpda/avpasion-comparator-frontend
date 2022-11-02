import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  useBreakpoint,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import getColor from "../../../helpers/get-color";
import { TV } from "../../../models/tv";
import Score from "../../score";
import { useTvs } from "../../tv/tvs-provider";

type SectionProps = {
  title: string;
  icon: IconType;
  getScore: (tv: TV) => number;
  id?: string;
  children: React.ReactNode;
};

const Section = ({ title, getScore, children, id, icon }: SectionProps) => {
  const { tvs } = useTvs();

  return (
    <section id={id}>
      <Box borderRadius="8" overflow="hidden">
        <Grid
          gridTemplateColumns={`repeat(${tvs.length + 1}, 1fr)`}
          justifyContent="space-between"
          alignItems="flex-end"
          borderBottom="2px"
          pb="2"
        >
          <GridItem display="flex">
            <Icon as={icon} fontSize="24" mr="2" />
            <Heading
              as="h2"
              size="md"
              fontWeight="extrabold"
              textTransform="uppercase"
              height="min-content"
            >
              {title.toUpperCase()}
            </Heading>
          </GridItem>
          {tvs.map((tv) => (
            <GridItem justifySelf="flex-end" key={tv.slug}>
              <Score value={getScore(tv)} size={50} />
            </GridItem>
          ))}
        </Grid>
        <Box py="4">{children}</Box>
      </Box>
    </section>
  );
};

export default Section;
