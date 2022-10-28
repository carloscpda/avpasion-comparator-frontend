import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
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
  }, [tvId]);

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
      {loading && <Spinner />}
      <Grid
        gap={4}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {data.map((mt, index) => (
          <MarketplacePrice
            key={mt.marketplace?.data?.attributes?.name}
            position={index + 1}
            {...mt}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PricesSection;
