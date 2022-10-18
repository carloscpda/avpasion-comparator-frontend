import { As, Heading, Text, TypographyProps } from "@chakra-ui/react";
import React from "react";

type TvTitleProps = {
  brand?: string;
  model?: string;
  size?: TypographyProps["fontSize"];
  captionSize?: TypographyProps["fontSize"];
  as?: As;
};

const TvTitle = ({
  brand,
  model,
  size = "3xl",
  captionSize = "xl",
  as = "p",
}: TvTitleProps) => {
  return (
    <Heading as={as} fontSize={size}>
      <Text
        as="span"
        display="block"
        fontSize={captionSize}
        fontWeight="semibold"
        color="red.700"
      >
        {brand}
      </Text>
      {model}
    </Heading>
  );
};

export default TvTitle;
