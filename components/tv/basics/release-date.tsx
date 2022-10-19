import { TypographyProps } from "@chakra-ui/react";
import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import Value from "../../value";

type TvReleaseDateProps = {
  value: string;
  size?: TypographyProps["fontSize"];
};

const TvReleaseDate = ({ value }: TvReleaseDateProps) => {
  return (
    <Value label="Año de lanzamiento" icon={IoCalendarClearOutline}>
      {value.split("-")[0]}
    </Value>
  );
};

export default TvReleaseDate;
