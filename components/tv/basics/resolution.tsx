import { TypographyProps } from "@chakra-ui/react";
import React from "react";
import { IoTvOutline } from "react-icons/io5";
import Value from "../../value";

type TvResolutionProps = {
  value: { resolution: string; alternativeName: string };
  size?: TypographyProps["fontSize"];
};

const TvResolution = ({ value }: TvResolutionProps) => {
  return (
    <Value label="Resolución" icon={IoTvOutline}>
      {`${value.resolution?.replace(":", " x ")} · ${value.alternativeName}`}
    </Value>
  );
};

export default TvResolution;
