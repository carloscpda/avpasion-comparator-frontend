import { useTvs } from "../../components/tv/tvs-provider";
import { getBrand, getFullName, TV } from "../../models/tv";
import Head from "next/head";
import { buildPicture } from "../../models/picture";

const TVHead = () => {
  const tv = useTvs().tvs[0];

  return (
    <Head>
      <title>{getFullName(tv)}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              offerCount: "5",
              lowPrice: "119.99",
              highPrice: "199.99",
              priceCurrency: "EUR",
            },
          }),
        }}
      />
    </Head>
  );
};

export default TVHead;
