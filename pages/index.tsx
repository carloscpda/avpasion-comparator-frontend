import { Heading } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import GeneralHead from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <GeneralHead slug="" title="Inicio" />
      <Main>
        <Heading>Todos los televisores</Heading>
        Work in progres..
      </Main>
    </Layout>
  );
};

export default IndexPage;
