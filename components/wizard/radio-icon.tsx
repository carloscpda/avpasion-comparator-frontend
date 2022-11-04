import { As, Box, Icon, Text, useRadio, UseRadioProps } from "@chakra-ui/react";

type RadioIconProps = {
  title: string;
  icon: As;
} & UseRadioProps;

const RadioIcon = ({ title, icon, ...radioProps }: RadioIconProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "red.700",
          color: "white",
          borderColor: "red.700",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        <Icon as={icon} fontSize="2xl" />
        <Text>{title}</Text>
      </Box>
    </Box>
  );
};

export default RadioIcon;
