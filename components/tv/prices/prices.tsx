import { Box, Heading, HStack, Wrap } from "@chakra-ui/react";
import React from "react";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import MarketplacePrice from "./marketplace-price";

const PricesSection = ({
  marketplaceTvs,
}: {
  marketplaceTvs: MarketplaceTv[];
}) => {
  const sortedMarketplaceTvs = marketplaceTvs.sort((a, b) => {
    if (a.available !== b.available) {
      return a.available ? -1 : 1;
    }
    const priceA =
      (a.prices?.data[0].attributes?.price || 0) + (a.deliveryCost || 0);
    const priceB =
      (b.prices?.data[0].attributes?.price || 0) + (b.deliveryCost || 0);
    return priceA - priceB;
  });

  return (
    <Box mb="10">
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb="4"
      >
        Precios
      </Heading>
      <Wrap>
        {sortedMarketplaceTvs.map((mt, index) => (
          <MarketplacePrice
            key={mt.marketplace?.data?.attributes?.name}
            position={index + 1}
            {...mt}
          />
        ))}
      </Wrap>
    </Box>
  );
};

export default PricesSection;
