/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { useTvs } from "../../components/tv/tvs-provider";
import { getBrand, getFullName, getModel, getPicture } from "../../models/tv";
import Head from "next/head";
import { buildPicture } from "../../models/picture";
import Script from "next/script";

const TVHead = ({ offerCount }: { offerCount: number }) => {
  const tv = useTvs().tvs[0];
  const seoName = `${getBrand(tv)} ${getModel(tv)} ${tv.general?.screenSize}`;
  const pageUrl = `https://comparador.avpasion.com/tv/${tv.slug}`;
  const mainPicture = getPicture(tv) + "?width=400&height=300";

  return (
    <>
      <Head>
        <title>{`Televisor ${seoName} especificaciones, caracterí­sticas y precios | Comparador TV AVPasión`}</title>
        <link rel="preload" href={mainPicture} as="image" />
        <meta
          name="description"
          content={`Descubre todas las especificaciones del televisor ${seoName} y las mejores ofertas online.`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta
          property="og:title"
          content={`Televisor ${seoName} especificaciones, características y precios | Comparador TV AVPasión`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={mainPicture} />
        <meta
          property="og:description"
          content={`Descubre todas las especificaciones del televisor ${seoName} y las mejores ofertas online.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Comparador TV AVPasión" />
        <meta
          name="twitter:title"
          content={`Televisor ${seoName} especificaciones, características y precios | Comparador TV AVPasión`}
        />
        <meta
          name="twitter:description"
          content={`Descubre todas las especificaciones del televisor ${seoName} y las mejores ofertas online.`}
        />
        <meta name="twitter:image" content={mainPicture} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Script
        id="ldjson-product"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: tv.name,
          image:
            tv.design?.pictures?.data.map((pic) =>
              buildPicture(pic.attributes?.url || "")
            ) || [],
          description: getFullName(tv),
          gtin: tv.ean,
          brand: {
            "@type": "Brand",
            name: getBrand(tv),
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: tv.score,
              bestRating: "10",
            },
            author: {
              "@type": "Person",
              name: "AVPasión",
            },
          },
          offers: {
            "@type": "AggregateOffer",
            offerCount: offerCount,
            lowPrice: tv.minPrice,
            highPrice: tv.maxPrice,
            priceCurrency: "EUR",
          },
        })}
      </Script>
    </>
  );
};

export default TVHead;
