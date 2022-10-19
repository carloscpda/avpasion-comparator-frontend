import { Box, LayoutProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type TvPictureProps = {
  src: string;
  alt: string;
  height?: LayoutProps["height"];
  width?: LayoutProps["width"];
};

const TvPicture = ({ src, alt, height, width }: TvPictureProps) => {
  return (
    <Box position="relative" height={height} width={width}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </Box>
  );
};

export default TvPicture;
