import { Heading } from "@chakra-ui/react";
import Main from "../components/layout/main";
import GeneralHead from "../components/head";
import { GetServerSideProps } from "next";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";
import Wizard from "../components/wizard/wizard";

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
      <Heading>Encuentra tu televisor</Heading>
      <Wizard />
    </Main>
  );
};

export default IndexPage;
