import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import Ad from "../components/ad";
import GeneralHead from "../components/head";
import Main from "../components/layout/main";
import PageTitle from "../components/layout/page-title";
import getBrands from "../graphql/get-brands";
import getHelpArticles from "../graphql/get-help-articles";
import getImageTechnologies from "../graphql/get-image-technologies";
import { Brand } from "../models/brand";
import { ImageTechnology } from "../models/image-technology";
import { buildPicture } from "../models/picture";

export const getStaticProps: GetStaticProps = async () => {
  const helpArticles = await getHelpArticles();
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
      <GeneralHead slug="marcas" title="Marcas" />
      <PageTitle title="Todas las marcas" />
      <Flex
        justifyContent="space-between"
        direction={{ base: "column-reverse", md: "row-reverse" }}
        pt="8"
      >
        <Ad id="ssm_sidebar_ad2" position={{ md: "sticky" }} top="40" />
        <VStack alignItems="flex-start" mt="8" gap={12}>
          {brands.map((brand) => (
            <Grid
              key={brand.name}
              gap="4"
              alignItems="flex-start"
              templateColumns={"1fr 2fr"}
            >
              <Box
                px="4"
                py="2"
                shadow="md"
                borderRadius={8}
                gridRow={{ base: "1", sm: "1 / span 2" }}
              >
                <NextLink
                  href={`/mejores-televisores?brand=${brand.id}`}
                  prefetch={false}
                >
                  <a>
                    <Image
                      src={buildPicture(brand.logo, { width: 160 })}
                      alt={brand.name}
                      width="160px"
                      height="100px"
                      objectFit="contain"
                    />
                  </a>
                </NextLink>
              </Box>
              <StackItem>
                <NextLink
                  href={`/mejores-televisores?brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
                  <Link fontSize="2xl" fontWeight="bold">
                    {brand.name}
                  </Link>
                </NextLink>
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
                <NextLink
                  href={`/mejores-televisores?screen-size=1&brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
                  <Link color="gray.500">{`${brand.name} de menos de 50 pulgadas`}</Link>
                </NextLink>
                <NextLink
                  href={`/mejores-televisores?screen-size=2&brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
                  <Link color="gray.500">{`${brand.name} de 50 a 59 pulgadas`}</Link>
                </NextLink>
                <NextLink
                  href={`/mejores-televisores?screen-size=3&brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
                  <Link color="gray.500">{`${brand.name} de 60 a 69 pulgadas`}</Link>
                </NextLink>
                <NextLink
                  href={`/mejores-televisores?screen-size=4&brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
                  <Link color="gray.500">{`${brand.name} de 70 a 79 pulgadas`}</Link>
                </NextLink>
                <NextLink
                  href={`/mejores-televisores?screen-size=5&brand=${brand.id}`}
                  passHref
                  prefetch={false}
                >
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
                    href={`/mejores-televisores?image-technology=${tech.id}&brand=${brand.id}`}
                    passHref
                    prefetch={false}
                  >
                    <Link color="gray.500">{`${brand.name} con panel ${tech.name}`}</Link>
                  </NextLink>
                ))}
              </VStack>
            </Grid>
          ))}
        </VStack>
      </Flex>
    </Main>
  );
};

export default BrandsPage;
