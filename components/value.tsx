import { As, Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

type ValueProps = {
  children: ReactNode;
  label: string;
  icon: As;
};

const Value = ({ children, label, icon }: ValueProps) => {
  return (
    <Box display="flex">
      <Tooltip hasArrow label={label} bg="red.700">
        <span>
          <Icon as={icon} mr="1" fontSize="md" />
        </span>
      </Tooltip>
      <Text fontSize="sm">{children}</Text>
    </Box>
  );
};

export default Value;
