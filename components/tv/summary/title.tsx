import { As, TypographyProps } from "@chakra-ui/react";
import { SearchTV } from "../../../models/search-tv";
import { TV } from "../../../models/tv";
import TvTitle from "../basics/title";

type SummaryTitleProps = {
  tv: TV | SearchTV;
  size?: TypographyProps["fontSize"];
  captionSize?: TypographyProps["fontSize"];
  as?: As;
};

const SummaryTitle = ({
  tv,
  size = "3xl",
  captionSize = "xl",
  as = "h1",
}: SummaryTitleProps) => {
  return (
    <TvTitle
      as={as}
      size={size}
      captionSize={captionSize}
      model={tv.general?.brand?.model || ""}
      brand={
        tv.general?.brand?.serie?.data?.attributes?.brand?.data?.attributes
          ?.name || ""
      }
    />
  );
};

export default SummaryTitle;
