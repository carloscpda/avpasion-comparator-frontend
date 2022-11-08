import Head from "next/head";

const GeneralHead = ({ slug, title }: { slug: string; title: string }) => {
  const pageUrl = `https://comparador.avpasion.com/${slug}`;
  const fullTitle = `${title} - Comparador de Televisores | AVPasión`;
  const description = `¿Qué televisor debo comprar? Encuentra el televisor ideal. Descubre sus características y los mejores ofertas online.`;
  const picture = "https://comparador.avpasion.com/default-head.png";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={picture} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="634" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Comparador TV AVPasión" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={picture} />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Head>
  );
};

export default GeneralHead;
