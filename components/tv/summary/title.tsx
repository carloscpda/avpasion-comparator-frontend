import { Heading, Text, TypographyProps } from "@chakra-ui/react";
import React from "react";
import { SearchTV } from "../../../models/search-tv";
import { TV } from "../../../models/tv";

type SummaryTitleProps = {
  tv: TV | SearchTV;
  size?: TypographyProps["fontSize"];
  captionSize?: TypographyProps["fontSize"];
};

const SummaryTitle = ({
  tv,
  size = "3xl",
  captionSize = "xl",
}: SummaryTitleProps) => {
  return (
    <Heading fontSize={size}>
      <Text
        as="span"
        display="block"
        fontSize={captionSize}
        fontWeight="semibold"
        color="red.700"
      >
        {
          tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes
            ?.name
        }
      </Text>
      {tv.general?.brand?.model}
    </Heading>
  );
};

export default SummaryTitle;
