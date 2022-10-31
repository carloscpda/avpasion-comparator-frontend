import {
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
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
import { Brand } from "../models/brand";
import { ImageTechnology } from "../models/image-technology";
import SearchItem from "../components/search/item";
import Filters from "../components/search/filters/filters";
import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";
import ScreenSizeFilter from "../components/search/filters/screen-size-filter";
import { AiOutlineClear } from "react-icons/ai";

const TVS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [brands, imageTechnologies, prices]: [
    Brand[],
    ImageTechnology[],
    { minPrice: number; maxPrice: number }
  ] = await Promise.all([
    fetch("http://localhost:3000/api/filters/brands").then((res) => res.json()),
    fetch("http://localhost:3000/api/filters/image-technologies").then((res) =>
      res.json()
    ),
    fetch("http://localhost:3000/api/filters/prices").then((res) => res.json()),
  ]);

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = query?.brand ? query.brand.toString() : undefined;

  const price = (query?.price as string[]) || [];
  const minPrice = price[0] ? parseFloat(price[0]) : undefined;
  const maxPrice = price[1] ? parseFloat(price[1]) : undefined;

  const score = (query?.score as string[]) || [];
  const minScore = score[0] ? parseFloat(score[0]) : undefined;
  const maxScore = score[1] ? parseFloat(score[1]) : undefined;

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
    minScore,
    maxScore,
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
  const searchText = useBreakpointValue({
    base: "Busca una TV...",
    md: "Busca por modelo, serie, marca o EAN...",
  });
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
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          gap="3"
        >
          <Heading color="red.700">Todos los modelos.</Heading>
          <Link href="/search" passHref>
            <Button
              as="a"
              variant="outline"
              colorScheme="gray"
              color="gray.400"
              fontStyle="italic"
              fontWeight="light"
              width={{ base: "100%", md: "unset" }}
              justifyContent="space-between"
            >
              {searchText}
              <Icon as={SlMagnifier} ml="2" />
            </Button>
          </Link>
        </Flex>
        <Filters
          brands={brands}
          currentBrand={brand}
          imageTechnologies={imageTechnologies}
          currentImageTechnologies={imageTechnology}
          prices={prices}
        />
        <Grid
          flex="1"
          gridTemplateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          rowGap={16}
          columnGap={4}
          mb="4"
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
        {tvs.length === 0 && (
          <Flex justifyContent="center" alignItems="center" h="400px">
            <VStack>
              <Text>No se encuentran televisiones con estos filtros.</Text>
              <Button
                colorScheme="gray"
                onClick={() => router.replace("/", undefined)}
                leftIcon={<AiOutlineClear />}
              >
                Limpiar filtros
              </Button>
            </VStack>
          </Flex>
        )}
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
