/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";
import Script from "next/script";
import Head from "next/head";

import "../styles/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const env = process.env.NODE_ENV;

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="dns-prefetch" href="//cdn.avpasion.com" />
        <meta name="robots" content="index,follow" />

        <meta property="nrbi:sections" content="Comparador" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.avpasion.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.avpasion.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.avpasion.com/favicon-16x16.png"
        />
        <link rel="manifest" href="https://cdn.avpasion.com/site.webmanifest" />
        <link
          rel="mask-icon"
          href="https://cdn.avpasion.com/safari-pinned-tab.svg"
          color="#9b0f0f"
        />
      </Head>
      {env === "production" && (
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDWPPTX');
      `}
        </Script>
      )}
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
