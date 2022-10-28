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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoFilter } from "react-icons/io5";
import { AiOutlineClear } from "react-icons/ai";

import { Brand } from "../../../models/brand";
import { ImageTechnology } from "../../../models/image-technology";
import SelectFilter from "./select-filter";
import ScreenSizeFilter from "./screen-size-filter";
import { useRouter } from "next/router";
import RangeSliderFilter from "./range-slider-filter";

type FiltersProps = {
  brands: Brand[];
  currentBrand?: Brand["id"];
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const filtersButtonRef = useRef<any>();

  const cleanFilters = () => {
    router.replace("/", undefined);
    onClose();
  };

  return (
    <HStack gap={1} my="8" justifyContent="flex-end">
      <ScreenSizeFilter />
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
          <DrawerHeader color={"red.700"}>Filtros.</DrawerHeader>
          <DrawerBody>
            <VStack gap="4">
              <Box width="100%">
                <SelectFilter
                  data={brands}
                  currentValue={currentBrand}
                  name="Marca"
                  queryParamName="brand"
                />
              </Box>
              <Box width="100%">
                <SelectFilter
                  data={imageTechnologies}
                  currentValue={currentImageTechnologies}
                  name="Tecnología de imagen"
                  queryParamName="image-technology"
                />
              </Box>
              <Box width="100%">
                <RangeSliderFilter
                  name="Precios"
                  minValue={prices.minPrice}
                  maxValue={prices.maxPrice}
                  queryParamName="price"
                />
              </Box>
              <Box width="100%">
                <RangeSliderFilter
                  name="Puntuación"
                  minValue={0}
                  maxValue={10}
                  queryParamName="score"
                  step={0.1}
                />
              </Box>
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
