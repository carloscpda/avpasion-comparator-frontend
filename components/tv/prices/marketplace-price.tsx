import { Badge, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { RiTrophyLine } from "react-icons/ri";
import parseCurrency from "../../../helpers/parse-currency";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import { buildPicture } from "../../../models/picture";

const MarketplacePrice = ({
  marketplace,
  price,
  deliveryCost,
  deliveryTime,
  position,
  affiliateUrl,
  available,
}: MarketplaceTv & { position: number }) => {
  const deliveryCostText = deliveryCost
    ? parseCurrency(deliveryCost)
    : "Gratis";

  return (
    <NextLink href={affiliateUrl || ""} passHref prefetch={false}>
      <VStack
        as="a"
        py={1}
        px={3}
        spacing={0}
        borderWidth="2px"
        borderColor={position === 1 ? "purple.300" : "gray.100"}
        borderRadius={8}
        position="relative"
        alignItems="flex-start"
        justifyContent="space-around"
        width={{ base: "100%", md: "unset" }}
        height="100%"
        opacity={!available ? "0.6" : 1}
        transition="all 0.2s"
        cursor="pointer"
        rel="sponsored"
        target="_blank"
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        <HStack gap={4}>
          <Image
            alt={marketplace?.data?.attributes?.name}
            src={buildPicture(
              marketplace?.data?.attributes?.logo.data?.attributes?.url || "",
              { width: 80 }
            )}
            width={80}
            height={54}
            objectFit="contain"
          />
          <Flex flexDirection="column">
            <Text fontSize="2xl" fontWeight="semibold">
              {parseCurrency(price || 0)}
            </Text>
            <Flex color="gray.700" fontSize="sm">
              <Text>
                {deliveryCost !== null && `Envío: ${deliveryCostText} · `}
                <Icon
                  fontSize="lg"
                  color={available ? "green" : "red"}
                  as={available ? IoCheckmarkSharp : IoCloseSharp}
                  transform="translateY(4px)"
                />
                {available ? "En stock" : "Sin stock"}
              </Text>
            </Flex>
            <Text color="gray.700" fontSize="sm">
              {deliveryTime}
            </Text>
            <Flex gap="1" mt="1">
              {marketplace?.data?.attributes?.paymentMethods?.data.map(
                (method) => (
                  <Image
                    key={method.attributes?.name}
                    src={buildPicture(
                      method.attributes?.logo.data?.attributes?.url || "",
                      { width: 28 }
                    )}
                    alt={method.attributes?.name || ""}
                    height={20}
                    width={28}
                    objectFit="contain"
                  />
                )
              )}
            </Flex>
          </Flex>
        </HStack>
        <HStack position="absolute" mr={4} top="-3" right="3">
          {position === 1 && (
            <Badge
              colorScheme="purple"
              fontSize="md"
              borderRadius={4}
              display="flex"
              width="min-content"
              gap={1}
              alignItems="center"
              zIndex={2}
            >
              <Icon as={RiTrophyLine} />
              Mejor oferta
            </Badge>
          )}
        </HStack>
      </VStack>
    </NextLink>
  );
};

export default MarketplacePrice;
