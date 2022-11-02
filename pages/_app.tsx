import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalHead from "../components/global-head";
import Layout from "../components/layout/layout";
import useProgress from "../components/use-progress";
import HelpArticles from "../components/help-articles/help-articles";
import { HelpArticlesSection } from "../models/help-articles-section";

import "../styles/nprogress.css";
import Footer from "../components/layout/footer";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ helpArticles?: HelpArticlesSection }>) {
  useProgress();

  return (
    <>
      <GlobalHead />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
          {!!pageProps.helpArticles && (
            <HelpArticles {...pageProps.helpArticles} />
          )}
          <Footer />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
