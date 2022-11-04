import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import ImageViewer from "react-simple-image-viewer";
import {
  getFullName,
  getPicture,
  getSecundaryPictures,
  TV,
} from "../../../models/tv";
import TvPicture from "../basics/picture";

type SummaryPicturesProps = {
  tv: TV;
  height?: number;
  width?: number;
};

const SummaryPictures = ({ tv, height, width }: SummaryPicturesProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const fullName = getFullName(tv);
  const pic = getPicture(tv);
  const secondaryPics = getSecundaryPictures(tv);

  const images = [pic, ...secondaryPics.map((p) => p.url)];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <VStack>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 3,
          }}
          closeOnClickOutside
        />
      )}
      <Box as="button" onClick={() => openImageViewer(0)}>
        <TvPicture src={pic} alt={fullName} height={height} width={width} />
      </Box>
      <HStack alignSelf="flex-start">
        {secondaryPics.map((pic, index) => (
          <Box
            key={pic.url}
            as="button"
            onClick={() => openImageViewer(index + 1)}
            border="1px"
            borderColor="gray.100"
            p={1}
            borderRadius={8}
            overflow="hidden"
            _hover={{
              borderColor: "gray.200",
            }}
          >
            <TvPicture
              src={pic.url}
              alt={pic.alternativeText}
              height={40}
              width={60}
            />
          </Box>
        ))}
        <Box
          as="button"
          onClick={() => openImageViewer(0)}
          border="1px"
          borderColor="gray.100"
          p={1}
          borderRadius={8}
          overflow="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="56px"
          width="56px"
          _hover={{
            borderColor: "gray.200",
          }}
        >
          <Icon as={SlMagnifierAdd} />
        </Box>
      </HStack>
    </VStack>
  );
};

export default SummaryPictures;
