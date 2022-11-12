/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import { useTvs } from "../../components/tv/tvs-provider";
import { buildPicture } from "../../models/picture";
import {
  getBrand,
  getModel,
  getPicture,
  getPictureDefinition,
} from "../../models/tv";

const TVHead = ({ offerCount }: { offerCount: number }) => {
  const tv = useTvs().tvs[0];
  const seoName = `${getBrand(tv)} ${getModel(tv)} ${tv.general?.screenSize}`;
  const pageUrl = `https://comparador.avpasion.com/televisores/${tv.slug}`;
  const mainPicture = getPicture(tv) + "?width=400";
  const originalPic = getPictureDefinition(tv);
  const title = `Televisor ${seoName} especificaciones, características y precios | Comparador TV AVPasión`;
  const description = `Descubre todas las especificaciones del televisor ${seoName} y las mejores ofertas online.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preload" href={mainPicture} as="image" />
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={originalPic.url} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content={originalPic.width} />
        <meta property="og:image:height" content={originalPic.height} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Comparador TV AVPasión" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={originalPic.url} />
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
          description: { title },
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
