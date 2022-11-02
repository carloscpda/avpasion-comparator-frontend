/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { useTvs } from "../../components/tv/tvs-provider";
import {
  getBrand,
  getModel,
  getPicture,
  getPictureDefinition,
} from "../../models/tv";
import Head from "next/head";

const ComparatorHead = () => {
  const tv1 = useTvs().tvs[0];
  const tv2 = useTvs().tvs[1];

  const seoName1 = `${getBrand(tv1)} ${getModel(tv1)} ${
    tv1.general?.screenSize
  }`;
  const seoName2 = `${getBrand(tv2)} ${getModel(tv2)} ${
    tv2.general?.screenSize
  }`;
  const pageUrl = `https://comparador.avpasion.com/vs/${tv1.slug}-vs-${tv2.slug}`;
  const mainPicture = getPicture(tv1) + "?width=400";
  const originalPic = getPictureDefinition(tv1);
  const title = `${seoName1} vs ${seoName2} | Comparador TV AVPasión`;
  const description = `¿Qué televisor es mejor? ${seoName1} vs ${seoName2} Descubre sus características y los mejores ofertas online.`;

  return (
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
  );
};

export default ComparatorHead;
