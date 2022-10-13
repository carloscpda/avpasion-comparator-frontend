import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import Value from "./value/value";
import { TextValueProps } from "./value/text";
import { BoolValueProps } from "./value/bool";
import { ColorValueProps } from "./value/color";
import { EnergyEfficiencyValueProps } from "./value/energy-efficiency";
import ListSpec from "./list";

export type SpecValueProps =
  | ({ type: "text" } & TextValueProps)
  | ({ type: "bool" } & BoolValueProps)
  | ({ type: "color" } & ColorValueProps)
  | ({ type: "energy-efficiency" } & EnergyEfficiencyValueProps);

export type RowSpec = {
  type: "row";
  label: string;
  value: SpecValueProps[];
};

export type ListSpec = {
  type: "list";
  label: string;
  value: SpecValueProps[][];
};

export type SpecsProps = {
  title: string;
  specs: (RowSpec | ListSpec)[];
};

const Specs = ({ title, specs }: SpecsProps) => {
  if (!specs.length) {
    return null;
  }

  return (
    <TableContainer mb="8" whiteSpace="normal">
      <Table variant="simple" size="sm" colorScheme="gray">
        <Thead>
          <Tr>
            <Th paddingStart="0">
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
              <Td paddingStart="0">{spec.label}</Td>
              {spec.value.map((value) => (
                <Td
                  paddingEnd="0"
                  isNumeric
                  width={`${100 / (spec.value.length + 1)}%`}
                >
                  {spec.type === "row" && (
                    <Value {...(value as SpecValueProps)} />
                  )}
                  {spec.type === "list" && (
                    <ListSpec items={value as SpecValueProps[]} />
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Specs;
