import {
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
import { useRouter } from "next/router";
import { useRef } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { BrandFilter } from "../../../models/brand-filter";
import { CableConnectionFilter } from "../../../models/cable-connections-filter";
import { ImageTechnology } from "../../../models/image-technology";
import RangeSliderFilter from "./range-slider-filter";
import ScreenSizeFilter from "./screen-size-filter";
import SelectFilter from "./select-filter";
import SliderFilter from "./slider-filter";

type FiltersProps = {
  brands: BrandFilter[];
  cableConnections: CableConnectionFilter[];
  imageTechnologies: ImageTechnology[];
  prices: { minPrice: number; maxPrice: number };
};

const Filters = ({
  brands,
  cableConnections,
  imageTechnologies,
  prices,
}: FiltersProps) => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const filtersButtonRef = useRef<any>();

  const cleanFilters = () => {
    router.replace(router.pathname, undefined);
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
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"red.700"}>Filtros</DrawerHeader>
          <DrawerBody>
            <VStack gap="4">
              {!isDesktop && <ScreenSizeFilter.Select />}
              <SelectFilter data={brands} name="Marca" queryParamName="brand" />
              <SelectFilter
                data={imageTechnologies}
                name="Tecnología de imagen"
                queryParamName="image-technology"
              />
              <RangeSliderFilter
                name="Precios"
                minValue={prices.minPrice}
                maxValue={prices.maxPrice}
                queryParamName="price"
              />
              <SliderFilter
                name="Puntuación"
                minValue={0}
                maxValue={10}
                queryParamName="score"
                step={0.1}
              />
              <SliderFilter
                name="Calidad de imagen"
                minValue={0}
                maxValue={10}
                queryParamName="image-score"
                step={0.1}
              />
              <SelectFilter
                data={cableConnections}
                name="Conexiones"
                queryParamName="cable"
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
