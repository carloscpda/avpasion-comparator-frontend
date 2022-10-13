import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  useBreakpoint,
  VStack,
} from "@chakra-ui/react";
import {
  IoCalendarClearOutline,
  IoCubeOutline,
  IoResize,
  IoTvOutline,
} from "react-icons/io5";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Score from "../score";
import { useTv } from "../tv-provider";

const GeneralSection = () => {
  const { design, fullName, general, image, sound, system, connections } =
    useTv();

  const bp = useBreakpoint();

  const { strapiScoreWeighting: scoreWeighting } =
    useStaticQuery<Queries.ScoreWeightingQuery>(graphql`
      query ScoreWeighting2 {
        strapiScoreWeighting {
          image
          sound
          connections
          design
          system
        }
      }
    `);

  const score =
    (scoreWeighting?.image || 0) * (image?.score || 0) +
    (scoreWeighting?.sound || 0) * (sound?.score || 0) +
    (scoreWeighting?.connections || 0) * (connections?.score || 0) +
    (scoreWeighting?.design || 0) * (design?.score || 0) +
    (scoreWeighting?.system || 0) * (system?.score || 0);

  const pic =
    design?.pictures?.[0]?.localFile?.childImageSharp?.gatsbyImageData !== null
      ? // @ts-ignore
        getImage(design.pictures[0].localFile)
      : null;

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
      >
        <Heading mb="4">{fullName}</Heading>
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
        <Box>
          <List>
            {general?.releaseDate && (
              <ListItem fontSize="xl">
                <ListIcon as={IoCalendarClearOutline} />
                {general.releaseDate.split("-")[0]}
              </ListItem>
            )}
            {image?.resolution && (
              <ListItem fontSize="xl">
                <ListIcon as={IoTvOutline} />
                {`${image.resolution.resolution?.replace(":", " x ")} · ${
                  image.resolution.alternativeName
                }`}
              </ListItem>
            )}
            {general?.screenSize && (
              <ListItem fontSize="xl">
                <ListIcon as={IoResize} />
                {`${general.screenSize} pumdadas`}
              </ListItem>
            )}
            {image?.technology?.image?.name && (
              <ListItem fontSize="xl">
                <ListIcon as={IoCubeOutline} />
                {image.technology.image.name}
              </ListItem>
            )}
          </List>
        </Box>
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

export default GeneralSection;
