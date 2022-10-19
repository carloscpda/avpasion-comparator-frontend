import { TypographyProps } from "@chakra-ui/react";
import React from "react";
import { IoCubeOutline } from "react-icons/io5";
import Value from "../../value";

type TvImageTechnologyProps = {
  value: string;
  size?: TypographyProps["fontSize"];
};

const TvImageTechnology = ({ value }: TvImageTechnologyProps) => {
  return (
    <Value label="Tecnología de imagen" icon={IoCubeOutline}>
      {value}
    </Value>
  );
};

export default TvImageTechnology;
