import { Button, HStack, Icon, TypographyProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoTvOutline } from "react-icons/io5";

const sizesMap: {
  sizegt?: number;
  sizelt?: number;
  text: string;
  iconSize: TypographyProps["fontSize"];
}[] = [
  { text: "Todos", iconSize: "md" },
  { sizelt: 50, text: 'Menos de 50"', iconSize: "xs" },
  { sizegt: 49.9, sizelt: 60, text: 'De 50" a 59"', iconSize: "sm" },
  { sizegt: 59.9, sizelt: 70, text: 'De 60" a 69"', iconSize: "md" },
  { sizegt: 69.9, sizelt: 80, text: 'De 70" a 79"', iconSize: "lg" },
  { sizegt: 80, text: 'Más de 79"', iconSize: "xl" },
];

function ScreenSizeFilter() {
  const router = useRouter();
  const currentSelection = router.query["screen-size"]
    ? parseInt(router.query["screen-size"] as string, 10)
    : 0;

  const handleChangeValue = (index: number) => {
    router.query["screen-size"] = index ? index.toString() : undefined;
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <HStack gap="1" display={{ base: "none", lg: "unset" }}>
      {sizesMap.map((size, index) => (
        <Button
          key={size.text}
          colorScheme="gray"
          disabled={currentSelection === index}
          size="sm"
          onClick={() => handleChangeValue(index)}
        >
          <Icon as={IoTvOutline} mr="1" fontSize={size.iconSize} />
          {size.text}
        </Button>
      ))}
    </HStack>
  );
}

ScreenSizeFilter.Sizes = sizesMap;

export default ScreenSizeFilter;
