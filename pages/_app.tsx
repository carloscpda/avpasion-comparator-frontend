import type { AppProps } from "next/app";
import GlobalHead from "../components/global-head";
import HelpArticles from "../components/help-articles/help-articles";
import Footer from "../components/layout/footer";
import Layout from "../components/layout/layout";
import useProgress from "../components/use-progress";
import { HelpArticleSectionDto } from "../server/help-articles-sections/help-articles-section.dto";

import "../styles/nprogress.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  helpArticles?: {
    section1: HelpArticleSectionDto | null;
    section2: HelpArticleSectionDto | null;
    section3: HelpArticleSectionDto | null;
  };
}>) {
  useProgress();

  return (
    <>
      <GlobalHead />
      <Layout>
        <Component {...pageProps} />
        {/* <Ad id="ssm_ctv_footer_grids" /> */}
        {!!pageProps.helpArticles && (
          <HelpArticles {...pageProps.helpArticles} />
        )}
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
