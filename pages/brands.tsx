import { Heading } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import { GetStaticProps } from "next";
import getBrands from "../graphql/get-brands";
import { Brand } from "../models/brand";

export const getStaticProps: GetStaticProps = async () => {
  const brands = await getBrands();

  return {
    props: {
      brands,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const BrandsPage = ({ brands }: { brands: Brand[] }) => {
  return (
    <Layout>
      <Main>
        <Heading color="red.700">Todas las marcas.</Heading>
        {brands.map((brand) => brand.name)}
      </Main>
    </Layout>
  );
};

export default BrandsPage;
