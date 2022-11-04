import { TypographyProps } from "@chakra-ui/react";
import { IoTvOutline } from "react-icons/io5";
import Value from "../../value";

type TvResolutionProps = {
  value: { resolution: string; alternativeName: string };
  size?: TypographyProps["fontSize"];
};

const TvResolution = ({ value }: TvResolutionProps) => {
  const text = `${value.resolution?.replace(":", " x ")} · ${
    value.alternativeName
  }`;

  return (
    <Value label="Resolución" icon={IoTvOutline}>
      {text || "-"}
    </Value>
  );
};

export default TvResolution;
