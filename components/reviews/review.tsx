import {
  Box,
  GridItem,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoIosPlayCircle } from "react-icons/io";
import ReactPlayer from "react-player";
import { Review } from "../../models/review";

const ReviewCard = ({ review }: { review: Review }) => {
  return review.video ? (
    <ReviewVideo review={review} />
  ) : (
    <ReviewArticle review={review} />
  );
};

const ReviewArticle = ({ review }: { review: Review }) => {
  return (
    <Link key={review.url} href={review.url}>
      <a target="_blank">
        <ReviewCardContent review={review} />
      </a>
    </Link>
  );
};

const ReviewVideo = ({ review }: { review: Review }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <ReviewCardContent review={review} />
      </button>
      {review.video && (
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent mx="2">
            <ModalHeader>{review.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody position="relative" pt="56.25%">
              <ReactPlayer
                url={review.url}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const ReviewCardContent = ({ review }: { review: Review }) => {
  return (
    <GridItem
      borderRadius={4}
      overflow="hidden"
      transition="all 0.1s"
      position="relative"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Image
        src={review.image || ""}
        alt={review.title || ""}
        width="400px"
        height="300px"
        objectFit="cover"
      />
      <Box
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        bgGradient="linear(to-t,  blackAlpha.900, blackAlpha.700, transparent, transparent)"
      />
      <Box
        px="4"
        py="2"
        position="absolute"
        top="0"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={4}
      >
        <Tag
          bg="red.700"
          color="white"
          width="min-content"
          size="sm"
          fontWeight="bold"
          textTransform="uppercase"
        >
          <TagLabel>{Review.TypeMap[review.type]}</TagLabel>
        </Tag>
        <HStack>
          {review.video && (
            <Icon as={IoIosPlayCircle} color="white" fontSize="5xl" mr="1" />
          )}
          <Text fontWeight="bold" color="white">
            {review.title}
          </Text>
        </HStack>
      </Box>
    </GridItem>
  );
};

export default ReviewCard;
