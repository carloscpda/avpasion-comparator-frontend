import { LayoutProps } from "@chakra-ui/react";
import React from "react";
import { getFullName, getPicture, TV } from "../../../models/tv";
import TvPicture from "../basics/picture";

type SummaryPictureProps = {
  tv: TV;
  height?: LayoutProps["height"];
  width?: LayoutProps["width"];
};

const SummaryPicture = ({ tv, height, width }: SummaryPictureProps) => {
  const fullName = getFullName(tv);
  const pic = getPicture(tv);

  return <TvPicture src={pic} alt={fullName} height={height} width={width} />;
};

export default SummaryPicture;
