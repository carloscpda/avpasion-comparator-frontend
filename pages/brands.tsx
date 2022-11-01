import { Box, Heading, VStack } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import { GetStaticProps } from "next";
import getBrands from "../graphql/get-brands";
import { Brand } from "../models/brand";
import Image from "next/image";
import { buildPicture } from "../models/picture";

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
        <VStack>
          {brands.map((brand) => (
            <Box key={brand.name}>
              {brand.logo && (
                <Image
                  src={`${buildPicture(brand.logo)}?width=200`}
                  alt={brand.name}
                  width="200"
                  height="100"
                  objectFit="contain"
                  unoptimized
                />
              )}
              {brand.name}
            </Box>
          ))}
        </VStack>
      </Main>
    </Layout>
  );
};

export default BrandsPage;
