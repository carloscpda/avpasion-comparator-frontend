import { Box, Heading, HStack, Spinner, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import MarketplacePrice from "./marketplace-price";

const PricesSection = ({ tvId }: { tvId: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarketplaceTv[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/marketplaces/${tvId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Wrap spacing={4} spacingY={6}>
        {loading && <Spinner />}
        {data.map((mt, index) => (
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
