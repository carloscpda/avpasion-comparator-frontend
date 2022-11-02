import { Heading } from "@chakra-ui/react";
import Main from "../components/layout/main";
import GeneralHead from "../components/head";
import { GetServerSideProps } from "next";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const helpArticles = await getHelpArticlesProps();

  // 1 hour
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  return {
    props: {
      helpArticles,
    },
  };
};

const IndexPage = () => {
  return (
    <Main>
      <GeneralHead slug="" title="Inicio" />
      <Heading>Todos los televisores</Heading>
      Work in progres..
    </Main>
  );
};

export default IndexPage;
