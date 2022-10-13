import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
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
  const { design, name, general, image, sound, system, connections } = useTv();

  const { strapiScoreWeighting: scoreWeighting } =
    useStaticQuery<Queries.ScoreWeightingQuery>(graphql`
      query ScoreWeighting {
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

  const pic = design?.pictures?.[0]?.localFile
    ? getImage(design.pictures[0].localFile)
    : null;

  return (
    <Flex my="16" alignItems="flex-start" gap="8">
      <Box
        borderRadius="16"
        border="1px"
        borderColor="gray.100"
        overflow="hidden"
      >
        {!!image && <GatsbyImage image={pic} alt={name || ""} />}
      </Box>
      <Box>
        <Heading mb="4">
          {general?.brand?.serie?.brand?.name} {name}
        </Heading>
        <List>
          <ListItem fontSize="xl">
            <ListIcon as={IoCalendarClearOutline} />
            {general?.releaseDate?.split("-")[0]}
          </ListItem>
          <ListItem fontSize="xl">
            <ListIcon as={IoTvOutline} />
            {image?.resolution?.resolution?.replace(":", " x ")} ·{" "}
            {image?.resolution?.alternativeName}
          </ListItem>
          <ListItem fontSize="xl">
            <ListIcon as={IoResize} />
            {general?.screenSize} pulgadas
          </ListItem>
          <ListItem fontSize="xl">
            <ListIcon as={IoCubeOutline} />
            {image?.technology?.image?.name}
          </ListItem>
        </List>
      </Box>
      <VStack justifyContent="center" flex="1">
        <Score value={score} size={160} />
      </VStack>
    </Flex>
  );
};

export default GeneralSection;
