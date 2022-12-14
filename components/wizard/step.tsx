import { Flex, FormLabel, GridItem, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type WizardStepProps = {
  title: string;
  step: number;
  children: ReactNode;
};

const WizardStep = ({ step, title, children }: WizardStepProps) => {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      py={{ base: "1", md: "4" }}
      px={{ base: "2", md: "8" }}
      borderRadius="8"
      minHeight={{ md: "244" }}
    >
      <FormLabel display="flex" alignItems="baseline">
        <Heading as="span" fontSize="4xl" color="red.700" mr="2">
          {`${step}.`}
        </Heading>
        <Text as="span" fontWeight="bold" fontSize="lg">
          {title}
        </Text>
      </FormLabel>
      <Flex flex="1" justifyContent="center" direction="column">
        {children}
      </Flex>
    </GridItem>
  );
};

export default WizardStep;
