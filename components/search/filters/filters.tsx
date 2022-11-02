import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoFilter } from "react-icons/io5";
import { AiOutlineClear } from "react-icons/ai";
import { BrandFilter } from "../../../models/brand-filter";
import { ImageTechnology } from "../../../models/image-technology";
import SelectFilter from "./select-filter";
import ScreenSizeFilter from "./screen-size-filter";
import { useRouter } from "next/router";
import RangeSliderFilter from "./range-slider-filter";

type FiltersProps = {
  brands: BrandFilter[];
  currentBrand?: BrandFilter["id"];
  imageTechnologies: ImageTechnology[];
  currentImageTechnologies?: ImageTechnology["id"];
  prices: { minPrice: number; maxPrice: number };
};

const Filters = ({
  brands,
  currentBrand,
  imageTechnologies,
  currentImageTechnologies,
  prices,
}: FiltersProps) => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const filtersButtonRef = useRef<any>();

  const cleanFilters = () => {
    router.replace("/", undefined);
    onClose();
  };

  return (
    <HStack gap={1} my="8" justifyContent="flex-end">
      {isDesktop && <ScreenSizeFilter />}
      <Divider
        orientation="vertical"
        height="6"
        borderLeftWidth="2px"
        borderColor="gray.300"
        display={{ base: "none", lg: "unset" }}
      />
      <Button
        ref={filtersButtonRef}
        colorScheme="red"
        backgroundColor="red.700"
        onClick={onOpen}
        size="sm"
        leftIcon={<IoFilter />}
      >
        Filtros
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={filtersButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"red.700"}>Filtros</DrawerHeader>
          <DrawerBody>
            <VStack gap="4">
              {!isDesktop && <ScreenSizeFilter.Select />}
              <SelectFilter
                data={brands}
                currentValue={currentBrand}
                name="Marca"
                queryParamName="brand"
              />
              <SelectFilter
                data={imageTechnologies}
                currentValue={currentImageTechnologies}
                name="Tecnología de imagen"
                queryParamName="image-technology"
              />

              <RangeSliderFilter
                name="Precios"
                minValue={prices.minPrice}
                maxValue={prices.maxPrice}
                queryParamName="price"
              />

              <RangeSliderFilter
                name="Puntuación"
                minValue={0}
                maxValue={10}
                queryParamName="score"
                step={0.1}
              />
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={cleanFilters}
              leftIcon={<AiOutlineClear />}
            >
              Limpiar filtros
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Filters;
