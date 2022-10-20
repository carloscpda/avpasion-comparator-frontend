import { Box, Button, Grid, Heading, HStack, Icon } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import Paginator from "../components/search/paginator";
import { GetServerSideProps } from "next";
import searchTvs from "../graphql/search-tvs";
import { SearchTV } from "../models/search-tv";
import {
  getBrand,
  getFullName,
  getImageTechnology,
  getModel,
  getPicture,
  getReleaseDate,
  getResolution,
  getScreenSize,
  getSerie,
} from "../models/tv";
import { useRouter } from "next/router";
import { useCallback } from "react";
import getBrands from "../graphql/get-brands";
import { Brand } from "../models/brand";
import getImageTechnologies from "../graphql/get-image-technologies";
import { ImageTechnology } from "../models/image-technology";
import NextLink from "next/link";
import SearchItem from "../components/search/item";
import ScreenSizeFilter from "../components/search/filters/screen-size-filter";

const TVS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const brands = await getBrands();
  const imageTechnologies = await getImageTechnologies();

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = query?.brand ? query.brand.toString() : undefined;
  const sizeGreatherThan = query?.sizegt
    ? parseFloat(query.sizegt as string)
    : undefined;
  const sizeLessThan = query?.sizelt
    ? parseFloat(query.sizelt as string)
    : undefined;
  const imageTechnology = query?.["image-technology"]
    ? query["image-technology"].toString()
    : undefined;

  const { data: tvs, meta } = await searchTvs({
    page: currentPage,
    offset: TVS_PER_PAGE,
    brand,
    imageTechnology,
    sizeGreatherThan,
    sizeLessThan,
  });

  return {
    props: {
      tvs,
      numberOfPages: meta?.pagination.pageCount,
      currentPage,
      brands,
      brand: brand || null,
      imageTechnologies,
      imageTechnology: imageTechnology || null,
    },
  };
};

const IndexPage = ({
  tvs,
  currentPage,
  numberOfPages,
  brands,
  brand,
  imageTechnologies,
  imageTechnology,
}: {
  tvs: SearchTV[];
  currentPage: number;
  numberOfPages: number;
  brands: Brand[];
  brand: Brand["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
}) => {
  const router = useRouter();

  const handleNavigate = useCallback(
    (page: number) => {
      router.query.page = page.toString();
      router.push(router);
    },
    [router]
  );

  return (
    <Layout>
      <Main>
        <Heading color="red.700">Todos los modelos.</Heading>
        <ScreenSizeFilter />
        <Box display="flex" gap={8} my="8">
          {/* <Box
            as="aside"
            backgroundColor="gray.100"
            borderRadius="16"
            width="64"
            minWidth="64"
            height="min-content"
            p="4"
          >
            <Heading as="h2" size="md">
              Filtros
            </Heading>
            <Filters
              brands={brands}
              currentBrand={brand}
              imageTechnologies={imageTechnologies}
              currentImageTechnologies={imageTechnology}
            />
          </Box> */}
          <Grid
            flex="1"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            rowGap={16}
            columnGap={4}
          >
            {tvs.map((tv) => (
              <SearchItem
                key={tv.slug}
                fullName={getFullName(tv)}
                picture={getPicture(tv)}
                score={tv.score || 0}
                brand={getBrand(tv)}
                ean={tv.ean}
                imageTechnology={getImageTechnology(tv)}
                model={getModel(tv)}
                releaseDate={getReleaseDate(tv)}
                resolution={getResolution(tv)}
                screenSize={getScreenSize(tv)}
                serie={getSerie(tv)}
              >
                <HStack justifyContent="flex-end">
                  <NextLink href={`/vs?tv=${tv.slug}`} passHref>
                    <Button as="a" colorScheme="gray" color="red.700" size="xs">
                      Comparar
                    </Button>
                  </NextLink>
                  <NextLink href={`/tv/${tv.slug}`} passHref>
                    <Button colorScheme="gray" color="red.700" size="xs">
                      Ver ficha
                    </Button>
                  </NextLink>
                </HStack>
              </SearchItem>
            ))}
          </Grid>
        </Box>
        <Paginator
          currentPage={currentPage}
          totalPages={numberOfPages}
          onNavigate={handleNavigate}
        />
      </Main>
    </Layout>
  );
};

export default IndexPage;
