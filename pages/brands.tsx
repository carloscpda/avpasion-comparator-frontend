import {
  Box,
  Heading,
  HStack,
  Link,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import { GetStaticProps } from "next";
import getBrands from "../graphql/get-brands";
import { Brand } from "../models/brand";
import Image from "next/image";
import { buildPicture } from "../models/picture";
import NextLink from "next/link";
import getImageTechnologies from "../graphql/get-image-technologies";
import { ImageTechnology } from "../models/image-technology";
import GeneralHead from "../components/head";

export const getStaticProps: GetStaticProps = async () => {
  const brands = await getBrands();
  const imageTechnologies = await getImageTechnologies();

  return {
    props: {
      brands,
      imageTechnologies,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const BrandsPage = ({
  brands,
  imageTechnologies,
}: {
  brands: Brand[];
  imageTechnologies: ImageTechnology[];
}) => {
  return (
    <Layout>
      <GeneralHead slug="brands" title="Marcas" />
      <Main>
        <Heading>Todas las marcas</Heading>
        <VStack alignItems="flex-start" mt="16" spacing={8}>
          {brands.map((brand) => (
            <HStack key={brand.name} spacing="4" alignItems="flex-start">
              {brand.logo && (
                <Box
                  border="1px"
                  px="4"
                  py="2"
                  borderColor="gray.100"
                  borderRadius={8}
                >
                  <Image
                    src={`${buildPicture(brand.logo)}?width=200`}
                    alt={brand.name}
                    width="100"
                    height="60"
                    objectFit="contain"
                    unoptimized
                  />
                </Box>
              )}
              <VStack alignItems="flex-start" spacing={4}>
                <StackItem>
                  <Text as="h2" fontSize="2xl" fontWeight="bold">
                    {brand.name}
                  </Text>
                  <Text>{`${brand.series} series`}</Text>
                </StackItem>
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    as="h3"
                    fontWeight="medium"
                  >{`Televisores ${brand.name} por pulgadas`}</Text>
                  <NextLink
                    href={`tvs?screen-size=1&brand=${brand.id}`}
                    passHref
                  >
                    <Link color="gray.500">{`${brand.name} de menos de 50 pulgadas`}</Link>
                  </NextLink>
                  <NextLink
                    href={`tvs?screen-size=2&brand=${brand.id}`}
                    passHref
                  >
                    <Link color="gray.500">{`${brand.name} de 50 a 59 pulgadas`}</Link>
                  </NextLink>
                  <NextLink
                    href={`tvs?screen-size=3&brand=${brand.id}`}
                    passHref
                  >
                    <Link color="gray.500">{`${brand.name} de 60 a 69 pulgadas`}</Link>
                  </NextLink>
                  <NextLink
                    href={`tvs?screen-size=4&brand=${brand.id}`}
                    passHref
                  >
                    <Link color="gray.500">{`${brand.name} de 70 a 79 pulgadas`}</Link>
                  </NextLink>
                  <NextLink
                    href={`tvs?screen-size=5&brand=${brand.id}`}
                    passHref
                  >
                    <Link color="gray.500">{`${brand.name} de 80 o más pulgadas`}</Link>
                  </NextLink>
                </VStack>
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    as="h3"
                    fontWeight="medium"
                  >{`Televisores ${brand.name} por tipo de panel`}</Text>

                  {imageTechnologies.map((tech) => (
                    <NextLink
                      key={tech.id}
                      href={`tvs?image-technology=${tech.id}&brand=${brand.id}`}
                      passHref
                    >
                      <Link color="gray.500">{`${brand.name} con panel ${tech.name}`}</Link>
                    </NextLink>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Main>
    </Layout>
  );
};

export default BrandsPage;
