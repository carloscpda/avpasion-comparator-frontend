import { HStack, Text } from "@chakra-ui/react";

export type QuantityValueProps = {
  name: string;
  quantity: number;
};

const QuantityValue = ({ name, quantity }: QuantityValueProps) => {
  return (
    <HStack
      display="inline-flex"
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

export default QuantityValue;
