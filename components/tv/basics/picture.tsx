import Image from "next/image";

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
      width={width}
      height={height}
      objectFit="contain"
      unoptimized
    />
  );
};

export default TvPicture;
