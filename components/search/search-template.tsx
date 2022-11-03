import {
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import { BrandFilter } from "../../models/brand-filter";
import { ImageTechnology } from "../../models/image-technology";
import Main from "../layout/main";
import Filters from "./filters/filters";
import Paginator from "./paginator";

const SearchTemplate = ({
  title,
  currentPage,
  numberOfPages,
  brands,
  brand,
  imageTechnologies,
  imageTechnology,
  prices,
  noResults,
  children,
}: {
  title: string;
  currentPage: number;
  numberOfPages: number;
  brands: BrandFilter[];
  brand: BrandFilter["id"];
  imageTechnologies: ImageTechnology[];
  imageTechnology: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
  noResults: boolean;
  children: ReactNode;
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
    <Main>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="flex-start"
        justifyContent="space-between"
        gap="3"
      >
        <Heading>{title}</Heading>
        <Link href="/search" passHref>
          <Button
            as="a"
            variant="outline"
            colorScheme="gray"
            color="gray.700"
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
        {children}
      </Grid>
      {noResults && (
        <Flex justifyContent="center" alignItems="center" h="400px">
          <VStack>
            <Text>No se encuentran televisiones con estos filtros</Text>
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
  );
};

export default SearchTemplate;
