import Head from "next/head";
import Script from "next/script";

const GlobalHead = () => {
  const env = process.env.NODE_ENV;

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
        <link
          rel="mask-icon"
          href="https://cdn.avpasion.com/safari-pinned-tab.svg"
          color="#9b0f0f"
        />
      </Head>
      {env === "production" && (
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDWPPTX');
          `}
        </Script>
      )}
    </>
  );
};

export default GlobalHead;
