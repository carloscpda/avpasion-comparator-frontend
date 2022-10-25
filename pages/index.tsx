import { Button, Grid, Heading, HStack, Icon } from "@chakra-ui/react";
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
import SearchItem from "../components/search/item";
import Filters from "../components/search/filters/filters";
import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";
import ScreenSizeFilter from "../components/search/filters/screen-size-filter";
import getPrices from "../graphql/get-prices";

const TVS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const brands = await getBrands();
  const imageTechnologies = await getImageTechnologies();
  const prices = await getPrices();

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = query?.brand ? query.brand.toString() : undefined;

  const minPrice = query?.["min-price"]
    ? parseFloat(query["min-price"] as string)
    : undefined;

  const maxPrice = query?.["max-price"]
    ? parseFloat(query["max-price"] as string)
    : undefined;

  let sizeGreatherThan;
  let sizeLessThan;
  if (query?.["screen-size"]) {
    const size = parseInt(query["screen-size"] as string);
    const { sizegt, sizelt } = ScreenSizeFilter.Sizes[size];
    sizeGreatherThan = sizegt;
    sizeLessThan = sizelt;
  }

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
    minPrice,
    maxPrice,
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
      prices,
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
  prices,
}: {
  tvs: SearchTV[];
  currentPage: number;
  numberOfPages: number;
  brands: Brand[];
  brand: Brand["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
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
        <HStack justifyContent="space-between">
          <Heading color="red.700">Todos los modelos.</Heading>
          <Link href="/search" passHref>
            <Button as="a" variant="outline" colorScheme="gray">
              Busca por modelo, serie, marca o EAN...
              <Icon as={SlMagnifier} ml="2" />
            </Button>
          </Link>
        </HStack>
        <Filters
          brands={brands}
          currentBrand={brand}
          imageTechnologies={imageTechnologies}
          currentImageTechnologies={imageTechnology}
          prices={prices}
        />
        <Grid
          flex="1"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          rowGap={16}
          columnGap={4}
        >
          {tvs.map((tv) => (
            <SearchItem
              key={tv.slug}
              slug={tv.slug || ""}
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
              price={tv.minPrice || 0}
            />
          ))}
        </Grid>
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
