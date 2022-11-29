import { Image } from "@chakra-ui/react";

type TvPictureProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

const TvPicture = ({ src, alt, height = 300, width = 400 }: TvPictureProps) => {
  return (
    <Image
      src={`${src}?width=${width * 2}`}
      alt={alt}
      width={`${width}px`}
      height={`${height}px`}
      objectFit="contain"
    />
  );
};

export default TvPicture;
