import { TypographyProps } from "@chakra-ui/react";
import { IoTvOutline } from "react-icons/io5";
import Value from "../../value";

type TvResolutionProps = {
  value: { resolution: string; alternativeName?: string };
  size?: TypographyProps["fontSize"];
};

const TvResolution = ({ value }: TvResolutionProps) => {
  let text = value.resolution?.replace(":", " x ");
  if (value.alternativeName) {
    text = `${text} · ${value.alternativeName}`;
  }

  return (
    <Value label="Resolución" icon={IoTvOutline}>
      {text || "-"}
    </Value>
  );
};

export default TvResolution;
