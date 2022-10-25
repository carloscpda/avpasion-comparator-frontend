import { Button, HStack, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoTvOutline } from "react-icons/io5";

const sizesMap: {
  sizegt?: number;
  sizelt?: number;
}[] = [
  {},
  { sizelt: 50 },
  { sizegt: 49.9, sizelt: 60 },
  { sizegt: 59.9, sizelt: 70 },
  { sizegt: 69.9, sizelt: 80 },
  { sizegt: 80 },
];

function ScreenSizeFilter() {
  const router = useRouter();

  const handleChangeValue = (index: number) => {
    router.query["screen-size"] = index ? index.toString() : undefined;
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <HStack gap="2">
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(0)}>
        <Icon as={IoTvOutline} mr="1" fontSize="xs" />
        Todos
      </Button>
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(1)}>
        <Icon as={IoTvOutline} mr="1" fontSize="xs" />
        {'Menos de 50"'}
      </Button>
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(2)}>
        <Icon as={IoTvOutline} mr="1" fontSize="sm" />
        {'De 50" a 59"'}
      </Button>
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(3)}>
        <Icon as={IoTvOutline} mr="1" fontSize="md" />
        {'De 60" a 69"'}
      </Button>
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(4)}>
        <Icon as={IoTvOutline} mr="1" fontSize="lg" />
        {'De 70" a 79"'}
      </Button>
      <Button colorScheme="gray" size="sm" onClick={() => handleChangeValue(5)}>
        <Icon as={IoTvOutline} mr="1" fontSize="xl" />
        {'Más de 79"'}
      </Button>
    </HStack>
  );
}

ScreenSizeFilter.Sizes = sizesMap;

export default ScreenSizeFilter;
