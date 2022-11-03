import { TypographyProps } from "@chakra-ui/react";
import { TbBoxMultiple } from "react-icons/tb";
import Value from "../../value";

type TvSerieProps = {
  value: string;
  size?: TypographyProps["fontSize"];
};

const TvSerie = ({ value }: TvSerieProps) => {
  return (
    <Value label="Serie" icon={TbBoxMultiple}>
      {value}
    </Value>
  );
};

export default TvSerie;
