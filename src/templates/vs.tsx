import React from "react";
import { graphql, PageProps } from "gatsby";
import TvProvider from "../components/tv/tvs-provider";
import Comparator from "../components/comparator/comparator";
import Navbar from "../components/comparator/navbar";
import Layout from "../components/layout/layout";
import Main from "../components/layout/main";
import ComparatorHero from "../components/comparator/hero";

export default function TvComparatorPage({
  data,
}: PageProps<Queries.TvComparatorPageQuery>) {
  const { allStrapiTv } = data;

  return (
    <Layout>
      <TvProvider value={allStrapiTv.nodes}>
        <Navbar />
        <Main>
          <ComparatorHero />
          <Comparator />
        </Main>
      </TvProvider>
    </Layout>
  );
}

export const query = graphql`
  query TvComparatorPage($slugs: [String]!) {
    allStrapiTv(filter: { slug: { in: $slugs } }) {
      nodes {
        ...TV
      }
    }
  }
`;
