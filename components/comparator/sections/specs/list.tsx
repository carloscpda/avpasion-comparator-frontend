import { List, ListItem } from "@chakra-ui/react";
import Value, { SpecValueProps } from "./value/value";

type ListSpecProps = {
  items?: SpecValueProps[];
};

const ListSpec = ({ items }: ListSpecProps) => {
  if (items?.length === 0) {
    return <>{"-"}</>;
  }

  return (
    <List spacing="1">
      {items?.map((item, index) => (
        <ListItem key={index}>
          <Value {...item} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListSpec;
