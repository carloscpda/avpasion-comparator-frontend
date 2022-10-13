import React from "react";
import {
  Heading,
  ListItem,
  List,
  HStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import CableConnection, { CableConnectionProps } from "./cable-connection";
import Value, { ValueProps } from "./value/value";

export type RowSpecProps = {
  label: string;
  value: ValueProps;
  type: "row";
};

export type ListSpecProps = {
  label: string;
  value: ValueProps[];
  type: "list";
};

export type CableConnectionSpecProps = {
  label: string;
  value: CableConnectionProps[];
  type: "cable-connection";
};

export type SpecsProps = {
  title: string;
  specs: (RowSpecProps | ListSpecProps | CableConnectionSpecProps)[];
};

const Specs = ({ title, specs }: SpecsProps) => {
  if (!specs.length) {
    return null;
  }

  return (
    <TableContainer mb="8" whiteSpace="normal">
      <Table variant="simple" size="sm" colorScheme="gray" width="xl">
        <Thead>
          <Tr>
            <Th>
              <Text as="h3" size="sm">
                {title.toUpperCase()}
              </Text>
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {specs.map((spec) => (
            <Tr>
              <Td>{spec.label}</Td>
              <Td isNumeric>
                {spec.type === "row" && <Value {...spec.value} />}
                {spec.type === "list" && (
                  <List spacing="1">
                    {spec.value.map((value) => (
                      <ListItem>
                        <Value {...value} />
                      </ListItem>
                    ))}
                  </List>
                )}
                {spec.type === "cable-connection" && (
                  <HStack justifyContent="flex-end">
                    {spec.value.map((value) => (
                      <CableConnection
                        name={value.name}
                        quantity={value.quantity}
                      />
                    ))}
                  </HStack>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Specs;
