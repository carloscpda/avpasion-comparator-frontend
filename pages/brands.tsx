import {
  Box,
  Grid,
  Heading,
  Link,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Main from "../components/layout/main";
import { GetStaticProps } from "next";
import getBrands from "../graphql/get-brands";
import { Brand } from "../models/brand";
import Image from "next/image";
import { buildPicture } from "../models/picture";
import NextLink from "next/link";
import getImageTechnologies from "../graphql/get-image-technologies";
import { ImageTechnology } from "../models/image-technology";
import GeneralHead from "../components/head";
import getHelpArticlesProps from "../server/help-articles/get-help-articles-props";

export const getStaticProps: GetStaticProps = async () => {
  const helpArticles = await getHelpArticlesProps();
  const brands = await getBrands();
  const imageTechnologies = await getImageTechnologies();

  return {
    props: {
      helpArticles,
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
    <Main>
      <GeneralHead slug="brands" title="Marcas" />
      <Heading>Todas las marcas</Heading>
      <VStack alignItems="flex-start" mt="16" gap={12}>
        {brands.map((brand) => (
          <Grid
            key={brand.name}
            gap="4"
            alignItems="flex-start"
            templateColumns={"1fr 2fr"}
          >
            <Box
              border="1px"
              px="4"
              py="2"
              borderColor="gray.100"
              borderRadius={8}
              gridRow={{ base: "1", sm: "1 / span 2" }}
            >
              <Image
                src={`${buildPicture(brand.logo)}?width=200`}
                alt={brand.name}
                width="160"
                height="100"
                objectFit="contain"
                unoptimized
              />
            </Box>
            <StackItem>
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                {brand.name}
              </Text>
              <Text>{`${brand.series} series`}</Text>
            </StackItem>
            <VStack
              alignItems="flex-start"
              spacing={0}
              gridColumn={{ base: "1 / span 2", sm: "2" }}
            >
              <Text
                as="h3"
                fontWeight="medium"
              >{`Televisores ${brand.name} por pulgadas`}</Text>
              <NextLink href={`tvs?screen-size=1&brand=${brand.id}`} passHref>
                <Link color="gray.500">{`${brand.name} de menos de 50 pulgadas`}</Link>
              </NextLink>
              <NextLink href={`tvs?screen-size=2&brand=${brand.id}`} passHref>
                <Link color="gray.500">{`${brand.name} de 50 a 59 pulgadas`}</Link>
              </NextLink>
              <NextLink href={`tvs?screen-size=3&brand=${brand.id}`} passHref>
                <Link color="gray.500">{`${brand.name} de 60 a 69 pulgadas`}</Link>
              </NextLink>
              <NextLink href={`tvs?screen-size=4&brand=${brand.id}`} passHref>
                <Link color="gray.500">{`${brand.name} de 70 a 79 pulgadas`}</Link>
              </NextLink>
              <NextLink href={`tvs?screen-size=5&brand=${brand.id}`} passHref>
                <Link color="gray.500">{`${brand.name} de 80 o más pulgadas`}</Link>
              </NextLink>
              <Text
                as="h3"
                fontWeight="medium"
                pt="4"
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
          </Grid>
        ))}
      </VStack>
    </Main>
  );
};

export default BrandsPage;
