import {
  Badge,
  Flex,
  HStack,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
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
    <NextLink href={affiliateUrl || ""} passHref>
      <VStack
        py={1}
        px={3}
        spacing={0}
        borderWidth="2px"
        borderColor={position === 1 ? "green.300" : "gray.100"}
        borderRadius={8}
        position="relative"
        alignItems="flex-start"
        justifyContent="space-around"
        width={{ base: "100%", md: "unset" }}
        height="100%"
        opacity={!available ? "0.6" : 1}
        transition="all 0.2s"
        _hover={{
          borderColor: "red.700",
        }}
      >
        <HStack gap={4}>
          <Image
            alt={marketplace?.data?.attributes?.name}
            src={buildPicture(
              marketplace?.data?.attributes?.logo.data?.attributes?.url || ""
            )}
            width={80}
            height={54}
            objectFit="contain"
          />
          <Stat display="flex" flexDir="column" justifyContent="center">
            <StatLabel hidden>Precio</StatLabel>
            <StatNumber display="flex" alignItems="center" gap={2}>
              {parseCurrency(price)}
            </StatNumber>
            {!!delivery.length && (
              <StatHelpText>{`Envío: ${delivery.join(" | ")}`}</StatHelpText>
            )}
          </Stat>
        </HStack>
        {!!marketplace?.data?.attributes?.paymentMethods?.data.length && (
          <Flex gap="1">
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
          </Flex>
        )}
        <HStack position="absolute" mr={4} top="-3" right="3">
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
      </VStack>
    </NextLink>
  );
};

export default MarketplacePrice;
