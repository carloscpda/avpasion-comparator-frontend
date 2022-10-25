import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  StackItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { RiAlertLine, RiTrophyLine } from "react-icons/ri";
import parseCurrency from "../../../helpers/parse-currency";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import { buildPicture } from "../../../models/picture";

const MarketplacePrice = ({
  marketplace,
  prices,
  deliveryCost,
  deliveryTime,
  position,
  affiliateUrl,
  available,
  reconditioned,
}: MarketplaceTv & { position: number }) => {
  const price = prices?.data[0].attributes?.price || 0;
  let delivery = [];
  if (deliveryCost || deliveryCost === 0) {
    delivery.push(parseCurrency(deliveryCost));
  }
  if (deliveryTime) {
    delivery.push(deliveryTime);
  }

  return (
    <Box alignSelf="flex-end">
      <NextLink href={affiliateUrl || ""} passHref>
        <VStack alignItems="flex-end" as="a" spacing={-3}>
          <HStack mr={4}>
            {!available && (
              <Badge
                colorScheme="orange"
                fontSize="md"
                borderRadius={4}
                display="flex"
                width="min-content"
                gap={1}
                alignItems="center"
                zIndex={2}
                opacity="0.6"
              >
                <Icon as={RiAlertLine} />
                Sin stock
              </Badge>
            )}
            {position === 1 && (
              <Badge
                colorScheme="green"
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
          <VStack
            py={2}
            px={4}
            borderWidth="2px"
            borderColor={position === 1 ? "green.300" : "gray.100"}
            borderRadius={8}
            transition="all 0.2s"
            opacity={!available ? "0.6" : 1}
            alignItems="flex-start"
            _hover={{
              borderColor: "red.700",
            }}
          >
            <HStack gap={4}>
              <StackItem>
                <Image
                  alt={marketplace?.data?.attributes?.name}
                  src={buildPicture(
                    marketplace?.data?.attributes?.logo.data?.attributes?.url ||
                      ""
                  )}
                  width={80}
                  height={54}
                  objectFit="contain"
                />
              </StackItem>
              <StackItem>
                <Stat
                  height="64px"
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                >
                  <StatLabel hidden>Precio</StatLabel>
                  <StatNumber display="flex" alignItems="center" gap={2}>
                    {parseCurrency(price)}
                  </StatNumber>
                  {!!delivery.length && (
                    <StatHelpText>{`Envío: ${delivery.join(
                      " | "
                    )}`}</StatHelpText>
                  )}
                </Stat>
              </StackItem>
            </HStack>
            <HStack>
              <Flex fontSize="xs" color="gray.600" alignItems="center">
                <Icon
                  fontSize="lg"
                  as={reconditioned ? IoCheckmark : IoClose}
                  color={reconditioned ? "green" : "red"}
                />
                <Text>Reacondicionado</Text>
              </Flex>
            </HStack>
            <HStack gap="1" height="20px">
              {marketplace?.data?.attributes?.paymentMethods?.data.map(
                (method) => (
                  <Image
                    key={method.attributes?.name}
                    src={buildPicture(
                      method.attributes?.logo.data?.attributes?.url || ""
                    )}
                    alt={method.attributes?.name || ""}
                    height={20}
                    width={28}
                    objectFit="contain"
                  />
                )
              )}
            </HStack>
          </VStack>
        </VStack>
      </NextLink>
    </Box>
  );
};

export default MarketplacePrice;
