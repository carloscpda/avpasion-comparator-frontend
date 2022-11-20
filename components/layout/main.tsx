import React from "react";
import Center from "./center";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Center as="main" direction="column" my={8} flex="1">
      {children}
    </Center>
  );
};

export default Main;
