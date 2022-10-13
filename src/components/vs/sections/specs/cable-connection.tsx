import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export type CableConnectionProps = {
  name: string;
  quantity: number;
};

const CableConnection = ({ name, quantity }: CableConnectionProps) => {
  return (
    <HStack
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
      py="1"
      px="2"
    >
      <Text color="gray.600" fontSize="sm">{`${quantity}x`}</Text>
      <Text>{name}</Text>
    </HStack>
  );
};

export default CableConnection;
