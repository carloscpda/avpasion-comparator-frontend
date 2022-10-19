import { Box, Grid, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import Main from "../components/layout/main";
import Layout from "../components/layout/layout";
import SummaryTitle from "../components/tv/summary/title";
import SummaryScore from "../components/tv/summary/score";
import Paginator from "../components/search/paginator";
import { GetServerSideProps } from "next";
import searchTvs from "../graphql/search-tvs";
import { SearchTV } from "../models/search-tv";
import { TV } from "../models/tv";
import { useRouter } from "next/router";
import { useCallback } from "react";
import getBrands from "../graphql/get-brands";
import Filters from "../components/search/filters/filters";
import { Brand } from "../models/brand";
import getImageTechnologies from "../graphql/get-image-technologies";
import { ImageTechnology } from "../models/image-technology";
import SummaryPicture from "../components/tv/summary/picture";
import TvSerie from "../components/tv/basics/serie";
import TvEan from "../components/tv/basics/ean";
import TvReleaseDate from "../components/tv/basics/release-date";
import TvResolution from "../components/tv/basics/resolution";
import TvImageTechnology from "../components/tv/basics/image-technology";
import TvScreenSize from "../components/tv/basics/screen-size";
import SearchRow from "../components/search/row";

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
              <SearchRow key={tv.slug} href={`/tv/${tv.slug}`}>
                <Box>
                  <SummaryScore tv={tv as TV} size={50} />
                </Box>
                <SummaryPicture tv={tv as TV} width={20} height={20} />
                <VStack flex="1" alignItems="flex-start">
                  <SummaryTitle tv={tv} size="md" captionSize="sm" />
                </VStack>
                <Grid
                  flex="2"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  pl="2"
                  borderLeft="2px"
                  borderColor="gray.100"
                >
                  <TvReleaseDate value={tv.general?.releaseDate} />
                  <TvImageTechnology
                    value={
                      tv.image?.technology?.image?.data?.attributes?.name || ""
                    }
                  />
                  <TvSerie
                    value={
                      tv.general?.brand?.serie?.data?.attributes?.name || ""
                    }
                  />
                  <TvEan value={tv.ean} />
                  <TvResolution
                    value={{
                      resolution:
                        tv.image?.resolution?.data?.attributes?.resolution ||
                        "",
                      alternativeName:
                        tv.image?.resolution?.data?.attributes
                          ?.alternativeName || "",
                    }}
                  />
                  <TvScreenSize value={tv.general?.screenSize || 0} />
                </Grid>
              </SearchRow>
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
