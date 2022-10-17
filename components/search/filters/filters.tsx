import { StackItem, VStack } from "@chakra-ui/react";

import { Brand } from "../../../models/brand";
import { ImageTechnology } from "../../../models/image-technology";
import Filter from "./filter";

type FiltersProps = {
  brands: Brand[];
  currentBrand?: Brand["id"];
  imageTechnologies: ImageTechnology[];
  currentImageTechnologies?: ImageTechnology["id"];
};

const Filters = ({
  brands,
  currentBrand,
  imageTechnologies,
  currentImageTechnologies,
}: FiltersProps) => {
  return (
    <VStack gap={4} mt="4">
      <StackItem width="100%">
        <Filter
          data={brands}
          currentValue={currentBrand}
          name="Marca"
          queryParamName="brand"
        />
      </StackItem>
      <StackItem width="100%">
        <Filter
          data={imageTechnologies}
          currentValue={currentImageTechnologies}
          name="Tecnología de imagen"
          queryParamName="image-technology"
        />
      </StackItem>
    </VStack>
  );
};

export default Filters;
