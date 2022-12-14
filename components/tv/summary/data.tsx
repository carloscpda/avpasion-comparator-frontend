import {
  Box,
  List,
  ListIcon,
  ListItem,
  TypographyProps
} from "@chakra-ui/react";
import {
  IoBarcodeOutline,
  IoCalendarClearOutline,
  IoCubeOutline,
  IoResize,
  IoTvOutline
} from "react-icons/io5";
import { TV } from "../../../models/tv";

type SummaryDataProps = {
  tv: TV;
  size?: TypographyProps["fontSize"];
};

const SummaryData = ({ tv, size = "xl" }: SummaryDataProps) => {
  const { general, image, ean } = tv;

  return (
    <Box>
      <List>
        {general?.releaseDate && (
          <ListItem fontSize={size}>
            <ListIcon as={IoCalendarClearOutline} />
            {general.releaseDate.split("-")[0]}
          </ListItem>
        )}
        {image?.resolution?.data && (
          <ListItem fontSize={size}>
            <ListIcon as={IoTvOutline} />
            {`${image.resolution.data?.attributes?.resolution?.replace(
              ":",
              " x "
            )} · ${image.resolution.data?.attributes?.alternativeName}`}
          </ListItem>
        )}
        {general?.screenSize && (
          <ListItem fontSize={size}>
            <ListIcon as={IoResize} />
            {`${general.screenSize} pulgadas`}
          </ListItem>
        )}
        {image?.technology?.image?.data?.attributes?.name && (
          <ListItem fontSize={size}>
            <ListIcon as={IoCubeOutline} />
            {image.technology.image.data.attributes.name}
          </ListItem>
        )}
        <ListItem fontSize={size}>
          <ListIcon as={IoBarcodeOutline} />
          {ean}
        </ListItem>
      </List>
    </Box>
  );
};

export default SummaryData;
