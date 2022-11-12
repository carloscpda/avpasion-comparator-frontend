import { Button, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BrandFilter } from "../../models/brand-filter";
import { CableConnectionFilter } from "../../models/cable-connections-filter";
import { ImageTechnology } from "../../models/image-technology";
import Main from "../layout/main";
import PageTitle from "../layout/page-title";
import Filters from "./filters/filters";
import Paginator from "./paginator";

const SearchTemplate = ({
  title,
  currentPage,
  numberOfPages,
  brands,
  imageTechnologies,
  cableConnections,
  prices,
  noResults,
  children,
}: {
  title: string;
  currentPage: number;
  numberOfPages: number;
  brands: BrandFilter[];
  cableConnections: CableConnectionFilter[];
  imageTechnologies: ImageTechnology[];
  prices: { minPrice: number; maxPrice: number };
  noResults: boolean;
  children: ReactNode;
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
    <Main>
      <PageTitle title={title} />
      <Filters
        brands={brands}
        imageTechnologies={imageTechnologies}
        prices={prices}
        cableConnections={cableConnections}
      />
      {/* <Ad id="ssm_ctv_leaderboard_grids" /> */}
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
        {children}
      </Grid>
      {noResults && (
        <Flex justifyContent="center" alignItems="center" h="400px">
          <VStack>
            <Text>No se encuentran televisores con estos filtros</Text>
            <Button
              colorScheme="gray"
              onClick={() => router.replace(router.pathname, undefined)}
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
  );
};

export default SearchTemplate;
