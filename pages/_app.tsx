import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalHead from "../components/global-head";
import Layout from "../components/layout/layout";
import useProgress from "../components/use-progress";

import "../styles/nprogress.css";
import HelpArticles from "../components/help-articles/help-articles";

function MyApp({ Component, pageProps }: AppProps) {
  useProgress();

  return (
    <>
      <GlobalHead />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
          <HelpArticles />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
