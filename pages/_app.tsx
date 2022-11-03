import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import GlobalHead from "../components/global-head";
import HelpArticles from "../components/help-articles/help-articles";
import Footer from "../components/layout/footer";
import Layout from "../components/layout/layout";
import useProgress from "../components/use-progress";
import { HelpArticlesSection } from "../models/help-articles-section";

import "../styles/nprogress.css";

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
