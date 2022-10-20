import { Button, HStack, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoTvOutline } from "react-icons/io5";

function ScreenSizeFilter() {
  const router = useRouter();

  const handleChangeValue = ({
    sizegt,
    sizelt,
  }: {
    sizegt?: number;
    sizelt?: number;
  }) => {
    console.log({ sizegt, sizelt });
    if (sizegt) {
      router.query.sizegt = sizegt.toString();
    } else {
      router.query.sizegt = undefined;
    }
    if (sizelt) {
      router.query.sizelt = sizelt.toString();
    } else {
      router.query.sizelt = undefined;
    }
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <HStack gap="2">
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => handleChangeValue({ sizelt: 50 })}
      >
        <Icon as={IoTvOutline} mr="1" fontSize="xs" />
        {'Menos de 50"'}
      </Button>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => handleChangeValue({ sizegt: 49.9, sizelt: 60 })}
      >
        <Icon as={IoTvOutline} mr="1" fontSize="sm" />
        {'De 50" a 59"'}
      </Button>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => handleChangeValue({ sizegt: 59.9, sizelt: 70 })}
      >
        <Icon as={IoTvOutline} mr="1" fontSize="md" />
        {'De 60" a 69"'}
      </Button>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => handleChangeValue({ sizegt: 69.9, sizelt: 80 })}
      >
        <Icon as={IoTvOutline} mr="1" fontSize="lg" />
        {'De 70" a 79"'}
      </Button>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => handleChangeValue({ sizegt: 80 })}
      >
        <Icon as={IoTvOutline} mr="1" fontSize="xl" />
        {'Más de 79"'}
      </Button>
    </HStack>
  );
}

export default ScreenSizeFilter;
