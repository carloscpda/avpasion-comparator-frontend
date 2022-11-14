import { Flex, Heading, Text } from "@chakra-ui/react";
import Main from "../components/layout/main";

export default function FourOhFour() {
  return (
    <Main>
      <Flex
        minH="400px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Heading size="lg">404</Heading>
        <Text>Página no encontrada</Text>
      </Flex>
    </Main>
  );
}
