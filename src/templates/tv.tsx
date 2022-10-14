import React from "react";
import { graphql, PageProps } from "gatsby";
import TvProvider from "../components/tv/tvs-provider";
import Comparator from "../components/comparator/comparator";
import Navbar from "../components/comparator/navbar";
import SerieSection from "../components/tv/serie/serie";
import Layout from "../components/layout/layout";
import Main from "../components/layout/main";
import Summary from "../components/tv/summary/summary";

export default function TvPage({ data }: PageProps<Queries.TvPageQuery>) {
  const { strapiTv, allStrapiTv } = data;

  return (
    <Layout>
      {/** @ts-ignore */}
      <TvProvider value={[strapiTv]}>
        <Navbar />
        <Main>
          <Summary />
          <SerieSection tvs={allStrapiTv} />
          <Comparator />
        </Main>
      </TvProvider>
    </Layout>
  );
}

export const query = graphql`
  query TvPage($slug: String!, $serieId: String) {
    strapiTv(slug: { eq: $slug }) {
      ...TV
    }
    allStrapiTv(
      filter: { general: { brand: { serie: { id: { eq: $serieId } } } } }
    ) {
      nodes {
        slug
        name
        general {
          screenSize
        }
        image {
          resolution {
            alternativeName
          }
        }
      }
    }
  }
`;
