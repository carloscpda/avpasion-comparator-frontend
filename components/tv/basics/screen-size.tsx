import { TypographyProps } from "@chakra-ui/react";
import React from "react";
import { IoResize } from "react-icons/io5";
import Value from "../../value";

type TvScreenSizeProps = {
  value: number;
  size?: TypographyProps["fontSize"];
};

const TvScreenSize = ({ value }: TvScreenSizeProps) => {
  return (
    <Value label="Tamaño de pantalla" icon={IoResize}>
      {`${value} pulgadas`}
    </Value>
  );
};

export default TvScreenSize;
