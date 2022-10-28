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
  const bp = useBreakpoint();

  let color = "#1A202C"; // gray.800
  const { tvs } = useTvs();

  if (tvs.length === 1) {
    color = getColor(getScore(tvs[0]));
  }

  return (
    <Box id={id}>
      <Box as="section" borderRadius="8" overflow="hidden">
        <Grid
          gridTemplateColumns={`repeat(${tvs.length + 1}, 1fr)`}
          p="4"
          justifyContent="space-between"
          alignItems="flex-end"
          borderBottom="2px"
          borderColor="gray.700"
        >
          <GridItem color="gray.700" display="flex">
            <Icon as={icon} fontSize={{ base: "24", md: "36" }} mr="2" />
            <Heading
              as="h2"
              size={{ base: "md", md: "lg" }}
              fontWeight="extrabold"
              height="min-content"
            >
              {title.toUpperCase()}
            </Heading>
          </GridItem>
          {tvs.map((tv) => (
            <GridItem justifySelf="flex-end" key={tv.slug}>
              <Score value={getScore(tv)} size={bp === "base" ? 50 : 70} />
            </GridItem>
          ))}
        </Grid>
        <Box py="4">{children}</Box>
      </Box>
    </Box>
  );
};

export default Section;
