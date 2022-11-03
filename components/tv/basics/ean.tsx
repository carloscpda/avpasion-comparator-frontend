import { TypographyProps } from "@chakra-ui/react";
import { IoBarcodeOutline } from "react-icons/io5";
import Value from "../../value";

type TvEanProps = {
  value: string;
  size?: TypographyProps["fontSize"];
};

const TvEan = ({ value }: TvEanProps) => {
  return (
    <Value label="EAN 13" icon={IoBarcodeOutline}>
      {value}
    </Value>
  );
};

export default TvEan;
