import { Box, LayoutProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { getFullName, getPicture, TV } from "../../../models/tv";

type SummaryPictureProps = {
  tv: TV;
  height?: LayoutProps["height"];
  width?: LayoutProps["width"];
};

const SummaryPicture = ({ tv, height, width }: SummaryPictureProps) => {
  const fullName = getFullName(tv);
  const pic = getPicture(tv);

  return (
    <Box position="relative" height={height} width={width}>
      <Image
        src={pic || "/tv-placeholder.png"}
        alt={fullName}
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default SummaryPicture;
