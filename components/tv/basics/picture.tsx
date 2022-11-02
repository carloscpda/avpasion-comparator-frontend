import Image from "next/image";
import React from "react";

type TvPictureProps = {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
};

const TvPicture = ({ src, alt, height = 300, width = 400 }: TvPictureProps) => {
  return (
    <Image
      src={`${src}?width=${width}&height=${height}`}
      alt={alt}
      width={width}
      height={height}
      objectFit="contain"
      unoptimized
    />
  );
};

export default TvPicture;
