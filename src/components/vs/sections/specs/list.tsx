import React from "react";
import { ListItem, List } from "@chakra-ui/react";
import Value from "./value/value";
import { SpecValueProps } from "./specs";

type ListSpecProps = {
  items: SpecValueProps[];
};

const ListSpec = ({ items }: ListSpecProps) => {
  if (items.length === 0) {
    return <>{"-"}</>;
  }

  return (
    <List spacing="1">
      {items.map((item) => (
        <ListItem>
          <Value {...item} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListSpec;
