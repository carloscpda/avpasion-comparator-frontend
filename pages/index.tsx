import { Box, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import SummaryTitle from "../components/tv/summary/title";
import SummaryData from "../components/tv/summary/data";
import SummaryScore from "../components/tv/summary/score";
import Paginator from "../components/search/paginator";
import { GetServerSideProps } from "next";
import searchTvs from "../graphql/search-tvs";
import { SearchTV } from "../models/search-tv";
import { TV } from "../models/tv";
import { useRouter } from "next/router";
import { useCallback } from "react";
import NextLink from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import getBrands from "../graphql/get-brands";
import Filters from "../components/search/filters/filters";
import { Brand } from "../models/brand";
import getImageTechnologies from "../graphql/get-image-technologies";
import { ImageTechnology } from "../models/image-technology";
import SummaryPicture from "../components/tv/summary/picture";
import TvSerie from "../components/tv/basics/serie";
import TvEan from "../components/tv/basics/ean";

const TVS_PER_PAGE = 12;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const brands = await getBrands();
  const imageTechnologies = await getImageTechnologies();

  const currentPage = parseInt(query?.page as string) || 1;

  const brand = query?.brand ? query.brand.toString() : undefined;
  const imageTechnology = query?.["image-technology"]
    ? query["image-technology"].toString()
    : undefined;

  const { data: tvs, meta } = await searchTvs({
    page: currentPage,
    offset: TVS_PER_PAGE,
    brand,
    imageTechnology,
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
        <Heading hidden>TVs</Heading>
        <Box display="flex" gap={8} my="8">
          <Box
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
          </Box>
          <VStack flex="1">
            {tvs.map((tv) => (
              <NextLink key={tv.slug} href={`/tv/${tv.slug}`} passHref>
                <HStack
                  width="100%"
                  py={2}
                  px={4}
                  gap={2}
                  borderWidth="1px"
                  borderColor="white"
                  cursor="pointer"
                  borderRadius={16}
                  transition="0.2s ease"
                  _hover={{
                    borderColor: "gray.200",
                  }}
                >
                  <Box>
                    <SummaryScore tv={tv as TV} size={50} />
                  </Box>
                  <SummaryPicture tv={tv as TV} width={20} height={20} />
                  <Box flex="1">
                    <SummaryTitle tv={tv} size="md" captionSize="sm" />
                  </Box>
                  <Box flex="1">
                    <TvSerie
                      value={
                        tv.general?.brand?.serie?.data?.attributes?.name || ""
                      }
                    />
                    <TvEan value={tv.ean} />
                  </Box>
                  <Box flex="1">
                    <SummaryData tv={tv as TV} size="sm" />
                  </Box>
                  <Icon as={IoIosArrowForward} />
                </HStack>
              </NextLink>
            ))}
          </VStack>
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
