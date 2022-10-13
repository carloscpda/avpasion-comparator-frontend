import { Box, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import getColor from "../get-color";
import Score from "../score";

type SectionProps = {
  title: string;
  icon: IconType;
  score: number;
  id?: string;
  children: React.ReactNode;
};

const Section = ({ title, score, children, id, icon }: SectionProps) => {
  const color = getColor(score);

  return (
    <Box id={id} pt="20">
      <Box as="section" borderRadius="16" overflow="hidden">
        <Box
          display="flex"
          p="4"
          justifyContent="space-between"
          alignItems="flex-end"
          backgroundColor={`${color}0D`}
          borderBottom="2px"
          borderColor={color}
        >
          <Box color={color} display="flex">
            <Icon as={icon} fontSize="36" mr="2" />
            <Heading
              as="h2"
              size="lg"
              fontWeight="extrabold"
              height="min-content"
            >
              {title.toUpperCase()}
            </Heading>
          </Box>
          <Score value={score} />
        </Box>
        <Box py="4">{children}</Box>
      </Box>
    </Box>
  );
};

export default Section;
