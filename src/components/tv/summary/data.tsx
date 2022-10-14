import {
  Box,
  List,
  ListIcon,
  ListItem,
  TypographyProps,
} from "@chakra-ui/react";
import {
  IoCalendarClearOutline,
  IoCubeOutline,
  IoResize,
  IoTvOutline,
} from "react-icons/io5";
import React from "react";
import { TV, useTvs } from "../tvs-provider";

type SummaryDataProps = {
  tv: TV;
  size?: TypographyProps["fontSize"];
};

const SummaryData = ({ tv, size = "xl" }: SummaryDataProps) => {
  const { general, image } = tv;

  return (
    <Box>
      <List>
        {general?.releaseDate && (
          <ListItem fontSize={size}>
            <ListIcon as={IoCalendarClearOutline} />
            {general.releaseDate.split("-")[0]}
          </ListItem>
        )}
        {image?.resolution && (
          <ListItem fontSize={size}>
            <ListIcon as={IoTvOutline} />
            {`${image.resolution.resolution?.replace(":", " x ")} · ${
              image.resolution.alternativeName
            }`}
          </ListItem>
        )}
        {general?.screenSize && (
          <ListItem fontSize={size}>
            <ListIcon as={IoResize} />
            {`${general.screenSize} pulgadas`}
          </ListItem>
        )}
        {image?.technology?.image?.name && (
          <ListItem fontSize={size}>
            <ListIcon as={IoCubeOutline} />
            {image.technology.image.name}
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default SummaryData;
