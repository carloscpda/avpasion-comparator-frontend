import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTvs } from "../../../tv/tvs-provider";
import ListSpec from "./list";
import SpecValue, { SpecValueProps } from "./value/value";

export type RowSpec = {
  type: "row";
  label: string;
  value: { [model: string]: SpecValueProps };
};

export type ListSpec = {
  type: "list";
  label: string;
  value: { [model: string]: SpecValueProps[] };
};

export type SpecsProps = {
  title: string;
  data: (RowSpec | ListSpec)[];
  withHead?: boolean;
};

const Specs = ({ title, data, withHead = false }: SpecsProps) => {
  const { tvs } = useTvs();

  if (!data.length) {
    return null;
  }

  const columnsWidth = 100 / (tvs.length + 1);

  return (
    <TableContainer mb="8" whiteSpace="normal">
      <Table variant="simple" size="sm" colorScheme="gray">
        <Thead>
          <Tr>
            <Th paddingStart="0">
              <Text as="h3" size="sm" textTransform="uppercase" color="red.700">
                {title}
              </Text>
            </Th>
            {tvs.map((tv) => (
              <Th key={tv.slug} paddingEnd="0" isNumeric>
                {withHead ? tv.general?.brand?.model : ""}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((spec) => (
            <Tr key={spec.label}>
              <Td paddingStart="0">{spec.label}</Td>
              {tvs.map((tv) => (
                <Td
                  key={tv.slug}
                  paddingEnd="0"
                  isNumeric
                  width={`${columnsWidth}%`}
                >
                  {spec.type === "row" && (
                    <SpecValue {...spec.value[tv.slug as string]} />
                  )}
                  {spec.type === "list" && (
                    <ListSpec items={spec.value[tv.slug as string]} />
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
